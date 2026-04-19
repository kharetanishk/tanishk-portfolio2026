import { Router, Request, Response, type IRouter } from "express";
import { prisma } from "../lib/prisma";

const router: IRouter = Router();

router.post("/pageview", async (req: Request, res: Response) => {
  try {
    const { path, referrer, userAgent } = req.body as {
      path: string;
      referrer?: string;
      userAgent?: string;
    };

    if (!path || typeof path !== "string") {
      return res.status(400).json({ success: false, error: "path is required" });
    }

    const xForwardedFor = req.headers["x-forwarded-for"];
    const ip = Array.isArray(xForwardedFor)
      ? xForwardedFor[0]
      : (xForwardedFor?.split(",")[0]?.trim() ?? req.socket.remoteAddress ?? "");

    await prisma.pageView.create({
      data: {
        path,
        referrer: referrer ?? null,
        userAgent: userAgent ?? req.headers["user-agent"] ?? null,
        country: ip ?? null,
      },
    });

    return res.json({ success: true });
  } catch (err) {
    console.error("[Analytics] POST /pageview error:", err);
    return res.status(500).json({ success: false, error: "Failed to record page view" });
  }
});

router.get("/popular", async (_req: Request, res: Response) => {
  try {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const results = await prisma.pageView.groupBy({
      by: ["path"],
      where: { createdAt: { gte: thirtyDaysAgo } },
      _count: { path: true },
      orderBy: { _count: { path: "desc" } },
      take: 10,
    });

    const popular = results.map((r: { path: string; _count: { path: number } }) => ({
      path: r.path,
      views: r._count.path,
    }));

    return res.json({ success: true, data: popular });
  } catch (err) {
    console.error("[Analytics] GET /popular error:", err);
    return res.status(500).json({ success: false, error: "Failed to fetch popular pages" });
  }
});

export default router;
