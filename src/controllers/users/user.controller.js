import { ref } from 'joi';
import Auth from '../../models/user';
import Helper from '../../helpers/user.utils';
import AuthServices from '../../services/user/auth.services';
import jwtService from '../../services/jwt.service';
import response from '../../helpers/response.helper';

/**
 *Contains Auth Controller
 *
 *
 * @class AuthController
 */
class AuthController {
  /**
   * Login user.
   * @param {Request} req - Response object.
   * @param {Response} res - The payload.
   * @memberof AuthController
   * @returns {JSON} - A JSON success response.
   */
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await AuthServices.emailExist(email, res);
      const confirmPassword = await Helper.verifyPassword(
        password,
        user.password
      );
      if (!confirmPassword || !user) {
        return response.errorMessage(
          res,
          'Invalid Login details.',
          401,
        );
      }

      const { access, refresh } = await jwtService.generate(req.body.email, req.body.fullName, user.role, res);
      await AuthServices.refresh({
        token: refresh
      });

      const data = {
        ACCESS_TOKEN: access,
        REFRESH_TOKEN: refresh
      };
      return response.successMessage(
        res,
        `Hi ${user.fullName}, You Successfully Signed In`,
        201,
        data
      );
    } catch (err) {
      return response.errorMessage(
        res,
        err.message,
        400,
      );
    }
  }

  /**
   * Create account for a user.
   * @param {Request} req - Response object.
   * @param {Response} res - The payload.
   * @memberof AuthController
   * @returns {JSON} - A JSON success response.
   */
  static async signUp(req, res) {
    try {
      let role;
      !req.body.role ? role = 'customer' : role = req.body.role;

      const NewUser = {
        ...req.body,
        role
      };
      const user = await Auth.create(NewUser);
      const { access, refresh } = await jwtService.generate(req.body.email, req.body.fullName, role, res);
      return res.status(201).json({
        status: 'success',
        data: {
          ACCESS_TOKEN: access,
          REFRESH_TOKEN: refresh,
          message: `Hi ${user.fullName}, You Successfully Signed Up`,
        },
      });
    } catch (err) {
      return response.errorMessage(
        res,
        err.message,
        400,
      );
    }
  }
}
export default AuthController;
