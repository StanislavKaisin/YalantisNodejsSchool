import { Response } from "express";
import fs from "fs";
import { errorResponse } from "./errorResponse";
import { IUser } from "../db/User.model";

export async function deleteUserAvatar(user: IUser, res: Response) {
  if (user.avatar === "uploads/no_image_available.jpg") return;
  fs.readdir("uploads/", function (err, files) {
    if (err) {
      console.log(err);
      return errorResponse(res, err);
    }
    console.log(files);
    const isAvatarExists = files.find((file) => {
      return file.includes(user.id);
    });
    if (isAvatarExists) {
      fs.unlinkSync(`uploads/${user.id}.jpg`);
    }
  });
}
