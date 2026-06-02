export type RequiredEnvName = "DATABASE_URL" | "JWT_SECRET" | "ADMIN_EMAIL" | "ADMIN_PASSWORD";

export interface BackendEnv {
  databaseUrl: string;
  jwtSecret: string;
  adminEmail: string;
  adminPassword: string;
}

function readRequiredEnv(name: RequiredEnvName): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function getDatabaseUrl(): string {
  const value = readRequiredEnv("DATABASE_URL");

  try {
    const parsed = new URL(value);

    if (parsed.protocol !== "postgresql:" && parsed.protocol !== "postgres:") {
      throw new Error("DATABASE_URL must use the postgresql:// or postgres:// protocol.");
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Invalid DATABASE_URL: ${error.message}`);
    }

    throw new Error("Invalid DATABASE_URL.");
  }

  return value;
}

export function loadBackendEnv(): BackendEnv {
  return {
    databaseUrl: getDatabaseUrl(),
    jwtSecret: readRequiredEnv("JWT_SECRET"),
    adminEmail: readRequiredEnv("ADMIN_EMAIL"),
    adminPassword: readRequiredEnv("ADMIN_PASSWORD"),
  };
}
