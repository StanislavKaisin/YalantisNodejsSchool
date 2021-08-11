import { Response } from "express";
import { Error } from "mongoose";

export const errorResponse = (res: Response, error: Error) => {
  res.status(500).json({
    error: error.message,
  });
};
