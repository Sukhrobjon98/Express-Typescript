import express, { Application } from "express";
import Controller from "./utils/interfaces/controller.interface";
import ErrorMiddleware from "./middlewares/error.middleware";
import cors from "cors";

export class App {
  public app: Application;
  public port: number;
  constructor(controllers: Controller[], port: number) {
    this.app = express();
    this.port = port;
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
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
  private initializeControllers(controllers: Controller[]): void {
    controllers.forEach((controller: Controller) => {
      this.app.use("/", controller.router);
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
