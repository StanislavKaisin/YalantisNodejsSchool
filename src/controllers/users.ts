import { IUser } from "../db/User.model";
import { Request, Response } from "express";

import {
  createUserFromDb,
  getUsersFromDb,
  getUserFromDb,
  deleteUserFromDb,
  updateUserFromDb,
} from "../services/user.service";
import { deleteUserAvatar } from "./deleteUserAvatar";
import { errorResponse } from "./errorResponse";
import { updateUserAvatar } from "./updateUserAvatar";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsersFromDb();
    return res.status(200).send({ data: users });
  } catch (error) {
    errorResponse(res, error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  const user: IUser = req.body;
  const id = res.locals.id;
  user.id = id;
  const avatar = res.locals.imgSrc;
  user.avatar = avatar;
  try {
    const newUser = await createUserFromDb(user);
    const newUserWithout_id = { ...JSON.parse(JSON.stringify(newUser)) };
    delete newUserWithout_id["_id"];
    return res.status(201).send({ data: newUserWithout_id });
  } catch (error) {
    errorResponse(res, error);
  }
};

export const getUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await getUserFromDb(id);
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
    await deleteUserAvatar(user, res);
    return res.status(200).send({ data: `User with id=${id} deleted` });
  } catch (error) {
    errorResponse(res, error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const user = req.body;
  const id = req.params.id;
  try {
    const findedUser = await getUserFromDb(id);
    if (!findedUser) {
      const error = "User not found";
      return res.status(404).send({ error: error });
    }
    try {
      //update avatar
      user.avatar = await updateUserAvatar(findedUser, req, res);
    } catch (error) {
      errorResponse(res, error);
    }
    const updatedUser = await updateUserFromDb(id, user);
    const updatedUserWithout_id = {
      ...JSON.parse(JSON.stringify(updatedUser)),
    };
    delete updatedUserWithout_id["_id"];
    return res.status(200).send({ data: updatedUserWithout_id });
  } catch (error) {
    errorResponse(res, error);
  }
};
