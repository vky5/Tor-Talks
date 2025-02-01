import { NextApiRequest, NextApiResponse } from "next";
import AppError from "@/lib/interface/Error";

export default function globalErrorHandler(
  err: AppError,
  req: NextApiRequest,
  res: NextApiResponse
) {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  console.log(err);

  res.status(statusCode).json({
    status: "error",
    message,
  });
}
