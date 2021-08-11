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
    return await UserModel.find({});
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUserFromDb(id: string) {
  try {
    return await UserModel.findById(id);
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteUserFromDb(id: string) {
  try {
    return await UserModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateUserFromDb(
  id: string,
  input: DocumentDefinition<IUser>
) {
  try {
    return await UserModel.findByIdAndUpdate(id, input, {
      useFindAndModify: false,
    });
  } catch (error) {
    throw new Error(error);
  }
}
