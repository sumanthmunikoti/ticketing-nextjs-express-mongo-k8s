import { ValidationError } from 'express-validator'

export class RequestValidationError extends Error {

  constructor(private errors: ValidationError[]) {
    super()

    // The Object.setPrototypeOf() method sets the prototype of a specified object to another object or null.
    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }
}