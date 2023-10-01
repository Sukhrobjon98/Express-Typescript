import { NextFunction, Request, Response, Router } from "express";
import CommentService from "./comment.service";
import Controller from "utils/interfaces/controller.interface";
import ParmaMiddleware from "../../middlewares/param.middleware";

export default class CommentController implements Controller{
    public path = "/comments";
    public router = Router();
    public commentService = new CommentService();
    constructor() {
        this.initializeRoutes();
    }
    private initializeRoutes() {
        this.router.get(`${this.path}/:id`,ParmaMiddleware, this.getCommentById);
    }
    private getCommentById = async (request: Request, response: Response, next: NextFunction) => {
        try {
        const comment = await this.commentService.getCommentById(5);
        response.send(comment);
        } catch (error) {
     next(error);
        }
    };
}


