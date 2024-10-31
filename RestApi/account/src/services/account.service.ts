import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { LoginUserDto, UserDto } from "../dtos/user.dto";
import {
  ExternalApiError,
  ExternalserviceError,
} from "../handlers/errors/ExternalApiError";
import { SuccessResponse } from "../handlers/responseHandler";
import { ValidationErrorHandler } from "../handlers/validationErrorHandler";
import { ForbiddenError } from "../handlers/errors/Errors";
import { validate } from "class-validator";

dotenv.config();

const DATABASE_PORT = process.env.DATABASE_CONTAINER_PORT;

const databaseServiceUrl = `http://database:${DATABASE_PORT}/api`;

class AccountService {
  static async register(body:object) {
    const userDto = UserDto.fromPlain(body);
    
    let errors = await validate(userDto);

    if (errors.length > 0) {
      throw ValidationErrorHandler(errors);
    }

    const hashedPassword = await bcrypt.hash(userDto.password, 10);

    userDto.password = hashedPassword;

    const url = `${databaseServiceUrl}/users`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDto),
    });

    if (!response.ok) {
      const errorData: ExternalserviceError = await response.json();

      throw new ExternalApiError(errorData);
    }

    const user: SuccessResponse = await response.json();

    return user.data;
  }

  static async login(body:object) {

    const userDto = LoginUserDto.fromPlain(body);
    let errors = await validate(userDto);

    if (errors.length > 0) {
      throw ValidationErrorHandler(errors);
    }

    const url = `${databaseServiceUrl}/users/filter?username=${userDto.username}`;

    const response = await fetch(url);

    if (!response.ok) {
      const errorData: ExternalserviceError = await response.json();
      throw new ExternalApiError(errorData);
    }

    const user: SuccessResponse = await response.json();

    const isPasswordCorrect = await bcrypt.compare(
      userDto.password,
      user.data.password
    );

    if (!isPasswordCorrect) throw new ForbiddenError();

    return user.data;
  }
}

export default AccountService;
