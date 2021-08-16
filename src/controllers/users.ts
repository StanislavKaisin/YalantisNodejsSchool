import { Request, Response } from "express";
import {
  createUserFromDb,
  getUsersFromDb,
  getUserFromDb,
  deleteUserFromDb,
  updateUserFromDb,
} from "../services/user.service";
import { errorResponse } from "./errorResponse";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsersFromDb();

    return res.status(200).send({ data: users });
  } catch (error) {
    errorResponse(res, error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  const user = req.body;
  try {
    const newUser = await createUserFromDb(user);
    return res.status(201).send({ data: newUser });
  } catch (error) {
    errorResponse(res, error);
  }
};

export const getUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await getUserFromDb(id);
    // response with avatar
    if (!user) {
      const error = "User not found";
      return res.status(404).send({ error: error });
    }
    return res.status(200).send({ data: user });
  } catch (error) {
    errorResponse(res, error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await deleteUserFromDb(id);
    if (!user) {
      const error = "User not found";
      return res.status(404).send({ error: error });
    }
    //delete avatar
    return res.status(200).send({ data: { deletedUser: user } });
  } catch (error) {
    errorResponse(res, error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const user = req.body;
  const id = req.params.id;
  try {
    const updatedUser = await updateUserFromDb(id, user);
    if (!updatedUser) {
      const error = "User not found";
      return res.status(404).send({ error: error });
    }
    //create avatar
    // response with avatar
    return res.status(200).send({ data: updatedUser });
  } catch (error) {
    errorResponse(res, error);
  }
};
