import Post from "./Post.js";
import NoteService from "../repositories/NoteService.js";

class NoteController {
    async create(req, res) {
        try {
            const note = await NoteService.create(req.body, req.files.picture)
            res.json(note)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const notes = await NoteService.getAll();
            return res.json(notes);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const note = await NoteService.getOne(req.params.id)
            return res.json(note)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async edit(req, res) {
        try {
            const editNote = await NoteService.edit(req.body);
            return res.json(editPost);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const note = await NoteService.create(req.params.id);
            return res.json(note)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new NoteController();