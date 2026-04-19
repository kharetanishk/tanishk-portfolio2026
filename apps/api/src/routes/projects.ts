import { Router, Request, Response, type IRouter } from "express";
import { prisma } from "../lib/prisma";
import { cache } from "../lib/redis";

const router: IRouter = Router();

router.get("/", async (_req: Request, res: Response) => {
  try {
    const cacheKey = "projects:all";
    const cached = await cache.get(cacheKey);
    if (cached) return res.json(cached);

    const projects = await prisma.project.findMany({
      where: { published: true },
      orderBy: { completedAt: "desc" },
      include: {
        testimonial: {
          select: {
            clientName: true,
            clientRole: true,
            clientCompany: true,
            clientCountry: true,
            quote: true,
            rating: true,
          },
        },
      },
    });

    const response = { success: true, data: projects };
    await cache.set(cacheKey, response, 10 * 60);
    return res.json(response);
  } catch (err) {
    console.error("[Projects] GET / error:", err);
    return res.status(500).json({ success: false, error: "Failed to fetch projects" });
  }
});

router.get("/featured", async (_req: Request, res: Response) => {
  try {
    const cacheKey = "projects:featured";
    const cached = await cache.get(cacheKey);
    if (cached) return res.json(cached);

    const projects = await prisma.project.findMany({
      where: { published: true, featured: true },
      orderBy: { completedAt: "desc" },
      take: 6,
      include: {
        testimonial: {
          select: {
            clientName: true,
            clientRole: true,
            clientCompany: true,
            clientCountry: true,
            quote: true,
            rating: true,
          },
        },
      },
    });

    const response = { success: true, data: projects };
    await cache.set(cacheKey, response, 10 * 60);
    return res.json(response);
  } catch (err) {
    console.error("[Projects] GET /featured error:", err);
    return res.status(500).json({ success: false, error: "Failed to fetch featured projects" });
  }
});

router.get("/:slug", async (req: Request, res: Response) => {
  try {
    const { slug } = req.params as { slug: string };
    const cacheKey = `projects:slug:${slug}`;
    const cached = await cache.get(cacheKey);
    if (cached) return res.json(cached);

    const project = await prisma.project.findFirst({
      where: { slug, published: true },
      include: {
        testimonial: true,
      },
    });

    if (!project) {
      return res.status(404).json({ success: false, error: "Project not found" });
    }

    await prisma.project.update({
      where: { id: project.id },
      data: { views: { increment: 1 } },
    });

    const response = { success: true, data: { ...project, views: project.views + 1 } };
    await cache.set(cacheKey, response, 10 * 60);
    return res.json(response);
  } catch (err) {
    console.error("[Projects] GET /:slug error:", err);
    return res.status(500).json({ success: false, error: "Failed to fetch project" });
  }
});

export default router;
