import Users from "@/models/UserModel";
import type { NextApiRequest, NextApiResponse } from "next";

import sendResponse from "@/util/sendResponse";

// importing error handling functionality
import catchAsync from "@/util/error handling/catchAsync";
import AppError from "@/util/error handling/appError";

// Correct function declaration
export default catchAsync(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // ensure the method of request
  if (req.method !== "POST") {
    throw new AppError("Not valid request type", 400);
  }

  const { username, email, password, name } = req.body;

  // validate inputs

  if (!username || !email || password) {
    throw new AppError("Username, email and password is required", 400);
  }

  const newUser = await Users.create({
    name: name,
    username: username,
    password: password,
    email: email,
  });

  sendResponse(res, 201, "signup was successful", newUser);
});


