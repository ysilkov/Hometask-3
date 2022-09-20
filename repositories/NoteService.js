import Post from "./Post.js";
import fileService from "../helpers/fileService.js";

class NoteService {
    async create(post, picture) {
        const fileName = fileService.saveFile(picture);
        const createdPost = await Post.create({...post, picture: fileName});
        return createdPost;
    }

    async getAll() {
        const posts = await Post.find();
        return posts;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const post = await Post.findById(id);
        return post;
    }

    async edit(post) {
        if (!post._id) {
            throw new Error('не указан ID')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost;
    }

    async delete(id) {
            if (!id) {
                throw new Error('не указан ID')
            }
            const post = await Post.findByIdAndDelete(id);
            return post;
    }
}


export default new NoteService();