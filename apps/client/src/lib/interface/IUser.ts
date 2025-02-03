import { Document } from "mongoose";

interface IUserModel extends Document {
  name?: string;
  username: string;
  email: string;
  password: string;
  passwordChangedAt?: Date;
  active: boolean;
  passwordResetToken?: string;
  passwordResetExpires?: Date;

  correctPassword(
    candidatePassword: string,
    hashedPasswordInDB: string
  ): Promise<boolean>;
  createPasswordResetToken(): string;
}

export default IUserModel;
