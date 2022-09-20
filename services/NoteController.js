import NoteService from "../repositories/NoteService.js";

class NoteController {
  async create(req, res) {
    try {
      const note = await NoteService.create(req.body);
      res.json(note);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const notes = await NoteService.getAll();
      return res.json(notes);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req, res) {
    try {
      const note = await NoteService.getOne(req.params.id);
      return res.json(note);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async edit(req, res) {
    try {
      const editNote = await NoteService.edit(req.params.id, req.body);
      return res.json(editNote);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async delete(req, res) {
    try {
      const note = await NoteService.delete(req.params.id);
      return res.json(note);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async stats(req, res) {
    try {
      const note = await NoteService.statistic();
      return res.json(note);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new NoteController();
