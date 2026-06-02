import express, { type Request, type Response } from "express";
import { PRODUCT_NAME, type ServiceStatus } from "@myclawteam/shared";

export function createApp() {
  const app = express();

  app.get("/", (_request: Request, response: Response<ServiceStatus>) => {
    response.json({
      name: PRODUCT_NAME,
      status: "ready",
    });
  });

  return app;
}
