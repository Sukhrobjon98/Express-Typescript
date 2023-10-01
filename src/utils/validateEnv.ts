import { cleanEnv, num, port, str, url } from "envalid";
import "dotenv/config";
function validEnv(): void {
  cleanEnv(process.env, {
    NODE_ENV: str({
      choices: ["development", "production", "test"],
      default: "development",
    }),
    PORT: port({ default: 4000 }),
    MONGO_URL: url()
  });
}

export default validEnv;
