import { Router } from "express";
import { schema, validate } from "../helpers/schema.js";
import NoteController from "../services/NoteController.js";

const router = new Router();

router.post("/notes", validate(schema), NoteController.create);
router.get("/notes", NoteController.getAll);
router.get("/notes/stats", NoteController.stats);
router.get("/notes/:id", NoteController.getOne);
router.patch("/notes/:id", validate(schema), NoteController.edit);
router.delete("/notes/:id", NoteController.delete);

export default router;
