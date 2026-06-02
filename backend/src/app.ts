import cors from "cors";
import express, { type Request, type Response } from "express";
import { PRODUCT_NAME, type ServiceStatus } from "@myclawteam/shared";
import { errorHandler, notFoundHandler } from "./middleware/errors.js";
import { healthRouter } from "./routes/health.js";

const JSON_BODY_LIMIT = "1mb";

export function createApp() {
  const app = express();

  app.disable("x-powered-by");
  app.use(cors());
  app.use(express.json({ limit: JSON_BODY_LIMIT }));

  app.get("/", (_request: Request, response: Response<ServiceStatus>) => {
    response.json({
      name: PRODUCT_NAME,
      status: "ready",
    });
  });

  app.use(healthRouter);
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
