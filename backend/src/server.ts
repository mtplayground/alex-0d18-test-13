import { createApp } from "./app.js";

const DEFAULT_HOST = "0.0.0.0";
const DEFAULT_PORT = 8080;

function readPort(value: string | undefined): number {
  if (!value) {
    return DEFAULT_PORT;
  }

  const port = Number.parseInt(value, 10);

  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    throw new Error(`Invalid PORT value: ${value}`);
  }

  return port;
}

const host = process.env.HOST || DEFAULT_HOST;
const port = readPort(process.env.PORT);
const app = createApp();

app.listen(port, host, () => {
  console.log(`myClawTeam backend listening on http://${host}:${port}`);
});
