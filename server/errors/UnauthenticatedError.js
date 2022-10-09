import { StatusCodes } from 'http-status-codes';
import { CustomApiError } from './index.js'

class UnauthenticatedError extends CustomApiError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnauthenticatedError;
