import express from "express";
import { getFilms, addFilm, editFilm, removeFilm } from "../controllers/filmController.js";

const router = express.Router();

router.get("/", getFilms);
router.post("/", addFilm);
router.put("/:id", editFilm);
router.delete("/:id", removeFilm);

export default router;
