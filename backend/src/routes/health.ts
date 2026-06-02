import { Router, type Response } from "express";
import { PRODUCT_NAME } from "@myclawteam/shared";

interface HealthResponse {
  name: typeof PRODUCT_NAME;
  status: "ok";
  timestamp: string;
  uptimeSeconds: number;
}

export const healthRouter = Router();

healthRouter.get("/health", (_request, response: Response<HealthResponse>) => {
  response.json({
    name: PRODUCT_NAME,
    status: "ok",
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.round(process.uptime()),
  });
});
