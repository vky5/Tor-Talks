import { Document } from "mongoose";

// Define the User document type
interface IUser extends Document {
  name?: string;
  username: string;
  email: string;
  password: string;
  active: boolean;
  passwordChangedAt?: Date;
  passwordResetToken?: string;
  PasswordResetExpires?: Date;
}

export default IUser;
