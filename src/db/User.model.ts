import { Schema, model } from "mongoose";

export interface IUser {
  id: string;
  name: string;
  surname: string;
  email: string;
  avatar?: string;
}

const schema = new Schema<IUser>(
  {
    id: { type: String, required: true },
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
