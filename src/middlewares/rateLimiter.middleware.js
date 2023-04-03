import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 6 * 1000,
  max: 5,
  message:
        'Too many accounts created from this IP, please try again after an hour',
});

export default limiter;
