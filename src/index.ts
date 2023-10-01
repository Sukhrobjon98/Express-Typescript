import App from "./app";
import "dotenv/config";
import validEnv from "./utils/validateEnv";
import CommentController from "./resources/comments/comment.controller";
let controllers = [new CommentController()];
validEnv();
let app = new App(controllers, 4000);

