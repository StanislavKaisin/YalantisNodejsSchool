import { Request, Response } from "express";

export const getAllUsers = (req: Request, res: Response) => {
  return res.status(200).json({
    data: "all users",
  });
};

export const createUser = (req: Request, res: Response) => {
  return res.status(201).json({
    data: `created user with some id`,
  });
};

export const getUser = (req: Request, res: Response) => {
  const id = req.params.id;
  return res.status(200).json({
    data: `user with id=${id}`,
  });
};

export const deleteUser = (req: Request, res: Response) => {
  const id = req.params.id;
  return res.status(200).json({
    data: `delete user with id=${id}`,
  });
};

export const updateUser = (req: Request, res: Response) => {
  const id = req.params.id;
  return res.status(200).json({
    data: `update user with id=${id}`,
  });
};
