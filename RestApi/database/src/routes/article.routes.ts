import { Router } from "express";
import {
    getAllArticles,
    getFilteredArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
} from "../controllers/article.controllers";

const router = Router();

router.get("/", getAllArticles);
router.get("/filter", getFilteredArticles);
router.get("/:id", getArticle);
router.post("/", createArticle);
router.patch("/:id", updateArticle);
router.delete("/:id", deleteArticle);

export default router;
