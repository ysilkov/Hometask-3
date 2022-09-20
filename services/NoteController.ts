import NoteService from "../repositories/NoteService.js";
import { Request, Response } from "express";

class NoteController {
  create(req: Request, res: Response) {
    try {
      const note = NoteService.create(req.body);
      res.json(note);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  getAll(req: Request, res: Response) {
    try {
      const notes = NoteService.getAll();
      return res.json(notes);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  getOne(req: Request, res: Response) {
    try {
      const note = NoteService.getOne(req.params.id);
      return res.json(note);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  edit(req: Request, res: Response) {
    try {
      const editNote = NoteService.edit(req.params.id, req.body);
      return res.json(editNote);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  delete(req: Request, res: Response) {
    try {
      const note = NoteService.delete(req.params.id);
      return res.json(note);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  stats(req: Request, res: Response) {
    try {
      const note = NoteService.statistic();
      return res.json(note);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new NoteController();
