import jwt from 'jsonwebtoken';
import dotenv from "dotenv"
dotenv.config()

const secretKey = process.env.JWT_SECRET ?? 'Secreto-Flexxus';

class TokenUtils {
  static generateToken(paylaod:object) {
    return jwt.sign(paylaod, secretKey, { expiresIn: '1h' });
  }

  static decodeToken(token: string) {
    const payload = jwt.verify(token, secretKey) as object 
    return payload
  }
}

export default TokenUtils;
