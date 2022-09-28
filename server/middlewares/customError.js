import { StatusCodes } from 'http-status-codes';

export default class CustomApiError extends Error {
  constructor(message) {
    super(message);
  }
}

export class NotFoundError extends CustomApiError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export class UnauthorizedError extends CustomApiError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
