import fs from "fs";
import { IUser } from "../db/User.model";

export async function deleteUserAvatar(user: IUser) {
  if (user.avatar === "uploads/no_image_available.jpg") return;
  fs.readdir("uploads/", function (err, files) {
    if (err) {
      return err;
    }
    const isAvatarExists = files.find((file) => {
      return file.includes(user.id);
    });
    if (isAvatarExists) {
      fs.unlinkSync(`uploads/${user.id}.jpg`);
    }
  });
}
