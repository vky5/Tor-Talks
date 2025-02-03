import * as jwt from "jsonwebtoken";
import { Types } from "mongoose";

export default function createToken(id: Types.ObjectId) {
  return jwt.sign({ id }, "random string please change later", {
    expiresIn: 70,
  });
}
