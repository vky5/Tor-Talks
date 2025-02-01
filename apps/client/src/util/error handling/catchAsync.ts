import globalErrorHandler from "@/util/error handling/globalErrorHandler";
import { NextApiRequest, NextApiResponse } from "next";

type HandlerFunction = (
  req: NextApiRequest,
  res: NextApiResponse
) => Promise<void>;

const asyncHandler =
  (fn: HandlerFunction) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await fn(req, res);
    } catch (err) {
      globalErrorHandler(err as Error, req, res);
    }
  };

export default asyncHandler;
