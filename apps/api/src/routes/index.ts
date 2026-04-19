import { Router, type IRouter } from "express";
import blogRouter from "./blog";
import projectsRouter from "./projects";
import contactRouter from "./contact";
import analyticsRouter from "./analytics";

const router: IRouter = Router();

router.use("/blog", blogRouter);
router.use("/projects", projectsRouter);
router.use("/contact", contactRouter);
router.use("/analytics", analyticsRouter);

export default router;
