import bcrypt from 'bcrypt';
import { config } from 'dotenv';

config();

export default {

  async verifyPassword(plainText, hashedText) {
    return await bcrypt.compare(plainText, hashedText);
  }
};
