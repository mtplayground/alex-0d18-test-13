import type { ErrorRequestHandler, NextFunction, Request, Response } from "express";

interface ErrorPayload {
  error: {
    code: string;
    message: string;
    status: number;
  };
}

interface ErrorWithHttpStatus extends Error {
  code?: string;
  expose?: boolean;
  status?: number;
  statusCode?: number;
}

export class HttpError extends Error {
  readonly code: string;
  readonly expose: boolean;
  readonly statusCode: number;

  constructor(statusCode: number, message: string, code = "HTTP_ERROR", expose = statusCode < 500) {
    super(message);
    this.name = "HttpError";
    this.code = code;
    this.expose = expose;
    this.statusCode = statusCode;
  }
}

function resolveStatus(error: ErrorWithHttpStatus): number {
  const status = error.statusCode ?? error.status;

  if (!status || status < 400 || status > 599) {
    return 500;
  }

  return status;
}

export function notFoundHandler(request: Request, _response: Response, next: NextFunction) {
  next(
    new HttpError(
      404,
      `Route ${request.method} ${request.originalUrl} was not found.`,
      "NOT_FOUND",
    ),
  );
}

export const errorHandler: ErrorRequestHandler = (
  error: ErrorWithHttpStatus,
  _request,
  response: Response<ErrorPayload>,
  _next,
) => {
  void _next;

  const status = resolveStatus(error);
  const code = error.code ?? (status === 500 ? "INTERNAL_SERVER_ERROR" : "REQUEST_ERROR");
  const message = error.expose || status < 500 ? error.message : "Internal server error.";

  if (status >= 500) {
    console.error(error);
  }

  response.status(status).json({
    error: {
      code,
      message,
      status,
    },
  });
};
