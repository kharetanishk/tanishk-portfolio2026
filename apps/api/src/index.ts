import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { prisma } from "./lib/prisma";
import { redis } from "./lib/redis";
import { corsMiddleware } from "./middleware/cors";
import { generalLimiter } from "./middleware/rateLimit";
import apiRouter from "./routes/index";

const app = express();
const PORT = parseInt(process.env["API_PORT"] ?? "4000", 10);

app.set("trust proxy", 1);

app.use(helmet());
app.use(corsMiddleware);
app.use(morgan(process.env["NODE_ENV"] === "production" ? "combined" : "dev"));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(generalLimiter);

app.get("/health", async (_req, res) => {
  let dbStatus = "connected";
  try {
    await prisma.$queryRaw`SELECT 1`;
  } catch {
    dbStatus = "disconnected";
  }

  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: dbStatus,
    environment: process.env["NODE_ENV"] ?? "development",
  });
});

app.use("/api/v1", apiRouter);

app.use((_req, res) => {
  res.status(404).json({ success: false, error: "Route not found" });
});

async function bootstrap() {
  try {
    await prisma.$connect();
    console.log("[Database] Connected to PostgreSQL");

    await redis.connect();
  } catch (err) {
    console.error("[Bootstrap] Failed to connect to services:", err);
  }

  const server = app.listen(PORT, () => {
    console.log(`[API] Server running on http://localhost:${PORT}`);
    console.log(`[API] Health check: http://localhost:${PORT}/health`);
  });

  const shutdown = async (signal: string) => {
    console.log(`\n[API] Received ${signal}. Graceful shutdown...`);
    server.close(async () => {
      await prisma.$disconnect();
      redis.disconnect();
      console.log("[API] Shutdown complete.");
      process.exit(0);
    });

    setTimeout(() => {
      console.error("[API] Forced shutdown after timeout.");
      process.exit(1);
    }, 10_000);
  };

  process.on("SIGTERM", () => void shutdown("SIGTERM"));
  process.on("SIGINT", () => void shutdown("SIGINT"));
}

void bootstrap();
