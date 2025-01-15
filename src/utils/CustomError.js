export class ServiceError extends Error {
  constructor(message, type, code) {
    super(message);
    this.name = 'ServiceError';
    this.type = type;
    this.code = code;

    // Maintains proper stack trace for where error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ServiceError);
    }
  }
}
