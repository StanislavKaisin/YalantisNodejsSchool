import { Schema, model } from "mongoose";

export interface IUser {
  name: string;
  surname: string;
  email: string;
  avatar?: string;
}

const schema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: String,
  },
  {
    versionKey: false,
  }
);

export const UserModel = model<IUser>("User", schema);
