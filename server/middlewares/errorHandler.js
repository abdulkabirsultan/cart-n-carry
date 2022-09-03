import CustomApiError from './customError.js';
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).send(err.message);
  }
  res.status(500).send('something went wrong');
};

export default errorHandlerMiddleware;
