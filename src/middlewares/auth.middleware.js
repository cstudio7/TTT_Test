import jwt from 'jsonwebtoken';
import response from '../helpers/response.helper';

export default async (req, res, next) => {
  if (req.headers.authorization) {
    // Token Check
    const [bearerToken, token] = req.headers.authorization.split(' ');
    if (bearerToken === 'Bearer') {
      try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        if (
          decoded.type !== process.env.JWT_ACCESS
          || decoded.aud !== process.env.JWT_AUDIENCE
          || decoded.iss !== process.env.JWT_ISSUER
        ) {
          return response.errorMessage(
            res,
            'Invalid token type',
            400,
          );
        }
        // Admin Privilege Check (Authorization Check)
        if (decoded.role !== 'admin') {
          return response.errorMessage(
            res,
            'Admin Privilege only',
            400,
          );
        }
        req.email = decoded.sub;
        req.name = decoded.name;
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
      'Invalid bearer token',
      400,
    );
  }
  return response.errorMessage(
    res,
    'Authorization header is not present',
    400,
  );
};
