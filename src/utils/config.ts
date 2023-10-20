import dotenv from "dotenv";

dotenv.config({
  path: process.env.NODE_ENV,
});

class Config {
  private env = process.env;

  public get(key: string): string {
    return this.env[key.toUpperCase()];
  }
}

export const config = new Config();
