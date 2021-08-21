import { IUser } from "../db/User.model";
import { Request, Response } from "express";
import sharp from "sharp";
import fs from "fs";
import { deleteUserAvatar } from "./deleteUserAvatar";

export async function updateUserAvatar(
  findedUser: IUser,
  req: Request,
  res: Response
) {
  const newFileName = findedUser.id;
  if (!req.file) return findedUser.avatar;
  if (
    (findedUser.avatar === "uploads/no_image_available.jpg" ||
      findedUser.avatar === null) &&
    req.file
  ) {
    try {
      fs.renameSync(res.locals.imgSrc, `uploads/${newFileName}.jpg`);
      return `uploads/${newFileName}.jpg`;
    } catch (error) {
      throw new Error(error);
    }
  }
  if (
    (findedUser.avatar !== "uploads/no_image_available.jpg" ||
      findedUser.avatar !== null) &&
    req.file
  ) {
    //delete previous avatar
    try {
      deleteUserAvatar(findedUser).then(() => {
        fs.renameSync(res.locals.imgSrc, `uploads/${newFileName}.jpg`);
        return `uploads/${newFileName}.jpg`;
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
