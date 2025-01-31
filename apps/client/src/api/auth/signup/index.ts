import Users from "@/models/UserModel";
import type { NextApiRequest, NextApiResponse } from "next";

import sendResponse from "@/util/sendResponse";

// Correct function declaration
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // ensure the method of request
  if (req.method !== "POST") {
    return sendResponse(res, 405, "Method not allowed");
  }

  const { username, email, password, name } = req.body;

  // validate inputs

  if (!username || !email || password) {
    return sendResponse(res, 400, "Username, email and password are required");
  }

  const newUser = await Users.create({
    name: name,
    username: username,
    password: password,
    email: email,
  });

  
}
