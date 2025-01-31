import { NextApiResponse } from "next";

export default function sendResponse(
  res: NextApiResponse,
  status: number,
  message: string,
  data?: unknown
) {
  res.status(status).json({ message, data });
}
