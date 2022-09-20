import { Router } from "express";
import PostController from "./PostController.js";


const router = new Router()

router.post('/notes', PostController.create) 
router.get('/notes', PostController.getAll)
router.get('/notes/:id', PostController.getOne)
router.patch('/notes/:id', PostController.update)
router.delete('/notes/:id', PostController.delete)
router.get('/notes/stats', PostController.getOne)




export default router