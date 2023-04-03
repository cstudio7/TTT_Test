import jwt from 'jsonwebtoken';
// import { ServerError } from "../helpers/server.error.js";
import redisService from '../services/redis.service.js';
import response from '../helpers/response.helper';

export default async (req, res, next) => {
  if (req.body.refresh) {
    const token = req.body.refresh;
    try {
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      if (
        decoded.type !== process.env.JWT_REFRESH
        || decoded.aud !== process.env.JWT_AUDIENCE
        || decoded.iss !== process.env.JWT_ISSUER
      ) {
        return response.errorMessage(
          res,
          'Invalid token type',
          400,
        );
        // next(new ServerError(401, "Invalid token type"));
      }
      const value = await redisService.get(token);
      if (value) {
        return response.errorMessage(
          res,
          'Refresh token was already used',
          400,
        );
        // next(new ServerError(401, "Refresh token was already used"));
      }
      req.email = decoded.sub;
      // req.name = decoded.name;
      return next();
    } catch (err) {
      return response.errorMessage(
        res,
        err.message,
        400,
      );
    }
  }
  return response.errorMessage(
    res,
    'Refresh token is not present',
    400,
  );
};
