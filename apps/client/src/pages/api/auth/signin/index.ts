// importing error handling functionality
import catchAsync from "@/util/error handling/catchAsync";
import AppError from "@/util/error handling/appError";

import Users from "@/models/UserModel";

// importing db connect function
import { NextApiRequest, NextApiResponse } from "next";
import createAndSendJWT from "@/util/auth/sendJWTToken";

import dbConnect from "@/lib/dbConnect/dbConnect";
import { Types } from "mongoose";

export default catchAsync(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {


  await dbConnect();

  if (req.method !== "POST") {
    throw new AppError("Not valid request type", 400);
  }


  const { email, password } = req.body();

  if (!email || !password) {
    throw new AppError("Email or password must be provided", 400);
  }

  const userFound = await Users.findOne({ email: email }).select("+password");

  if (!userFound) {
    throw new AppError("Incorrect Email Id or password", 401);
  }

  // checking if the password is correct
  const ans = await userFound.correctPassword(password, userFound.password);
  if (!ans) {
    throw new AppError("Incorrect Email Id or password", 401);
  }

  // had to typecast because extrating type of userFound is difficult
  const userId = userFound._id as Types.ObjectId;

  // creating and sending response
  createAndSendJWT(userId, req, res, 200, "Signin");
});
