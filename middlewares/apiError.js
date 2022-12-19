const {
    BadRequestResponse,
    NotFoundResponse,
    ValidationFailResponse,
   
  } = require("../middlewares/apiResponse");
  const environment = require("../config");
  
  const ErrorType = {
    BAD_TOKEN: "BadTokenError",
    NOT_FOUND: "NotFoundError",
    NO_DATA: "NoDataError",
    BAD_REQUEST: "BadRequestError",
     VALIDATION_FAIL: "ValidationFail",
  };
  
  class ApiError extends Error {
    constructor(type, message) {
      super(message);
      this.type = type;
    }
  
    static handle(err, res) {
      switch (err.type) {
       
        case ErrorType.NOT_FOUND:
        case ErrorType.NO_DATA:
          return new NotFoundResponse(err.message).send(res);
        case ErrorType.BAD_REQUEST:
          return new BadRequestResponse(err.message).send(res);
        case ErrorType.VALIDATION_FAIL:
          return new ValidationFailResponse(err.message).send(res);
        default: {
          let message = err.message;
          if (environment === "production")
            message = "Something wrong happened.";
          return new InternelResponse(message).send(res);
        }
      }
    }
  }
  
  class BadRequestError extends ApiError {
    constructor(message = "Bad Request") {
      super(ErrorType.BAD_REQUEST, message);
    }
  }
  
  class NotFoundError extends ApiError {
    constructor(message = "Not Found") {
      super(ErrorType.NOT_FOUND, message);
    }
  }
  
  class NoDataError extends ApiError {
    constructor(message = "No data available") {
      super(ErrorType.NO_DATA, message);
    }
  }
  class ValidationError extends ApiError {
    constructor(message = "Validation Fail") {
      super(ErrorType.VALIDATION_FAIL, message);
    }
  }
  
  
  
  module.exports = {
    ApiError,
    NoDataError,
    NotFoundError,
    BadRequestError,
  
    ValidationError,
   
  };