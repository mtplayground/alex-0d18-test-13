import { PrismaClient } from "@prisma/client";
import { getDatabaseUrl } from "../config/env.js";

const globalForPrisma = globalThis as unknown as {
  prismaClient?: PrismaClient;
};

function createPrismaClient(): PrismaClient {
  getDatabaseUrl();

  return new PrismaClient({
    log: process.env.NODE_ENV === "production" ? ["error"] : ["warn", "error"],
  });
}

export const prisma = globalForPrisma.prismaClient ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prismaClient = prisma;
}
