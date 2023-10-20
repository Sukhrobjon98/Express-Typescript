import express, { Application } from "express";
import IRouter from "./interfaces/router.interface";
import ErrorMiddleware from "./middlewares/error.middleware";
import cors from "cors";

export class App {
  public app: Application;
  public port: number;
  constructor(routers: IRouter[], port: number) {
    this.app = express();
    this.port = port;
    this.initializeMiddlewares();
    this.initializeRouters(routers);
    this.initializeErrorHandling();
    this.listen();
  }
  private initializeMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(
      cors({
        origin: "*",
      })
    );
  }
  private initializeRouters(controllers: IRouter[]): void {
    controllers.forEach((router: IRouter) => {
      this.app.use("/", router.router);
    });
  }
  private initializeErrorHandling(): void {
    this.app.use(ErrorMiddleware);
  }
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}

export default App;
