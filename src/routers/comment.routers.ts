import { Router } from "express";
import CommentController from "../controllers/comment.controller";
import IRouter from "interfaces/router.interface";

export class CommentRouter implements IRouter {
  path: string;
  router: Router;
  private commentController: CommentController;

  constructor() {
    this.path = "/comment";
    this.router = Router();
    this.commentController = new CommentController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:id`, this.commentController.getCommentById);
  }
}
