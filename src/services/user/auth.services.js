import Auth from '../../models/user';
import jwtService from '../jwt.service';
import redisService from '../redis.service';
import response from '../../helpers/response.helper';

export default {
  async emailExist(email, res) {
    try {
      const existingUser = {
        email,
      };
      const user = await Auth.findOne(existingUser);
      if (!user) {
        return false;
      }
      return user;
    } catch (err) {
      return response.errorMessage(
        res,
        err.message,
        401,
      );
    }
  },

  async refresh({ token }) {
    await redisService.set({
      key: token,
      value: '1',
      timeType: 'EX',
      time: parseInt(process.env.JWT_REFRESH_TIME, 10),
    });
  }

};
