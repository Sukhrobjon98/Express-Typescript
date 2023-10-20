import { CommentRouter } from "./routers/comment.routers";
import App from "./app";
import { config } from "./utils/config";
let controllers = [new CommentRouter()];
let app = new App(controllers, Number(config.get("PORT")));
