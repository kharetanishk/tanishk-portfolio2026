import { Router, Request, Response, type IRouter } from "express";
import { prisma } from "../lib/prisma";
import { cache } from "../lib/redis";

const router: IRouter = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const page = Math.max(1, parseInt(String(req.query["page"] ?? "1"), 10));
    const limit = Math.min(50, Math.max(1, parseInt(String(req.query["limit"] ?? "10"), 10)));
    const skip = (page - 1) * limit;

    const cacheKey = `blog:list:${page}:${limit}`;
    const cached = await cache.get(cacheKey);
    if (cached) {
      return res.json(cached);
    }

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where: { published: true },
        orderBy: { publishedAt: "desc" },
        skip,
        take: limit,
        select: {
          id: true,
          slug: true,
          title: true,
          excerpt: true,
          publishedAt: true,
          readingTime: true,
          views: true,
          featured: true,
          category: true,
          seoTitle: true,
          seoDesc: true,
          ogImage: true,
          tags: { select: { name: true, slug: true } },
        },
      }),
      prisma.blogPost.count({ where: { published: true } }),
    ]);

    const response = {
      success: true,
      data: posts,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };

    await cache.set(cacheKey, response, 5 * 60);
    return res.json(response);
  } catch (err) {
    console.error("[Blog] GET / error:", err);
    return res.status(500).json({ success: false, error: "Failed to fetch blog posts" });
  }
});

router.get("/featured", async (_req: Request, res: Response) => {
  try {
    const cacheKey = "blog:featured";
    const cached = await cache.get(cacheKey);
    if (cached) return res.json(cached);

    const posts = await prisma.blogPost.findMany({
      where: { published: true, featured: true },
      orderBy: { publishedAt: "desc" },
      take: 4,
      select: {
        id: true,
        slug: true,
        title: true,
        excerpt: true,
        publishedAt: true,
        readingTime: true,
        views: true,
        category: true,
        ogImage: true,
        tags: { select: { name: true, slug: true } },
      },
    });

    const response = { success: true, data: posts };
    await cache.set(cacheKey, response, 5 * 60);
    return res.json(response);
  } catch (err) {
    console.error("[Blog] GET /featured error:", err);
    return res.status(500).json({ success: false, error: "Failed to fetch featured posts" });
  }
});

router.get("/:slug", async (req: Request, res: Response) => {
  try {
    const { slug } = req.params as { slug: string };
    const cacheKey = `blog:post:${slug}`;
    const cached = await cache.get(cacheKey);
    if (cached) return res.json(cached);

    const post = await prisma.blogPost.findFirst({
      where: { slug, published: true },
      include: { tags: { select: { name: true, slug: true } } },
    });

    if (!post) {
      return res.status(404).json({ success: false, error: "Post not found" });
    }

    await prisma.blogPost.update({
      where: { id: post.id },
      data: { views: { increment: 1 } },
    });

    const response = { success: true, data: { ...post, views: post.views + 1 } };
    await cache.set(cacheKey, response, 10 * 60);
    return res.json(response);
  } catch (err) {
    console.error("[Blog] GET /:slug error:", err);
    return res.status(500).json({ success: false, error: "Failed to fetch post" });
  }
});

export default router;
