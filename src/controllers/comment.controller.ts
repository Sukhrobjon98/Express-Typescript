import { NextFunction, Request, Response, Router } from "express";
import CommentService from "../services/comment.service";
import ParmaMiddleware from "../middlewares/param.middleware";

export default class CommentController {
  private commentService = new CommentService();

  getCommentById = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const comment = await this.commentService.getCommentById(5);
      response.send(comment);
    } catch (error) {
      next(error);
    }
  };
}
