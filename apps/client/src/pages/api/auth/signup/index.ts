import Users from "@/models/UserModel";
import type { NextApiRequest, NextApiResponse } from "next";

// importing error handling functionality
import catchAsync from "@/util/error handling/catchAsync";
import AppError from "@/util/error handling/appError";
import createAndSendJWT from "@/util/auth/sendJWTToken";

import dbConnect from "@/lib/dbConnect/dbConnect";
import { Types } from "mongoose";

// Correct function declaration
export default catchAsync(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  // ensure the method of request
  if (req.method !== "POST") {
    throw new AppError("Not valid request type", 400);
  }

  const { username, email, password, name } = req.body;

  // validate inputs
  if (!username || !email || !password) {
    throw new AppError("Username, email and password is required", 400);
  }

  const newUser = await Users.create({
    name: name,
    username: username,
    password: password,
    email: email,
  });
   
  // Explicitly cast the _id to ObjectId

   const userId: Types.ObjectId = newUser._id as Types.ObjectId;

  createAndSendJWT(userId, req, res, 201, "Signup");
});
