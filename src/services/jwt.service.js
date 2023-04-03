import jwt from 'jsonwebtoken';

class JwtService {
  async generate(email, name, role, res) {
    try {
      const access = jwt.sign(
        {
          name,
          role,
          type: process.env.JWT_ACCESS,
        },
        process.env.JWT_KEY,
        {
          subject: email,
          expiresIn: parseInt(process.env.JWT_ACCESS_TIME, 10),
          audience: process.env.JWT_AUDIENCE,
          issuer: process.env.JWT_ISSUER,
        }
      );
      const refresh = jwt.sign(
        {
          name,
          type: process.env.JWT_REFRESH,
        },
        process.env.JWT_KEY,
        {
          subject: email,
          expiresIn: parseInt(process.env.JWT_REFRESH_TIME, 10),
          audience: process.env.JWT_AUDIENCE,
          issuer: process.env.JWT_ISSUER,
        }
      );
      return { access, refresh };
    } catch (err) {
      return res.status(500).json({
        status: '500 Internal server error',
        error: 'Error checking for email',
      });
    }
  }
}

export default new JwtService();
