import { DocumentDefinition } from "mongoose";
import { IUser, UserModel } from "../db/User.model";

export async function createUserFromDb(input: DocumentDefinition<IUser>) {
  try {
    return await UserModel.create(input);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUsersFromDb() {
  try {
    return await UserModel.find({}, { _id: 0 });
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUserFromDb(id: string) {
  try {
    return await UserModel.findOne({ id }, { _id: 0 });
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteUserFromDb(id: string) {
  try {
    return await UserModel.findOneAndDelete({ id });
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateUserFromDb(
  id: string,
  input: DocumentDefinition<IUser>
) {
  try {
    return await UserModel.findOneAndUpdate({ id }, input, {
      useFindAndModify: false,
      new: true,
    });
  } catch (error) {
    throw new Error(error);
  }
}
