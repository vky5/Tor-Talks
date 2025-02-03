import createToken from "./createJWTToken";
import { NextApiRequest, NextApiResponse } from "next";
import sendResponse from "../sendResponse";
import Cookies from "cookies";
import { Types } from "mongoose";

export default function createAndSendJWT(
  userId: Types.ObjectId,
  req: NextApiRequest,
  res: NextApiResponse,
  responseCode: number,
  authType: string
) {
  const token = createToken(userId);

  const cookieOptions = {
    httpOnly: true,
    secure: false, // TODO set to true in production
    expires: new Date(Date.now() + 70 * 24 * 60 * 60 * 1000),
  };
  // unlike express next doesnt support cookies stupid application
  const cookies = new Cookies(req, res);
  cookies.set("jwt", token, cookieOptions);

  sendResponse(res, responseCode, `${authType} successful`);
}
