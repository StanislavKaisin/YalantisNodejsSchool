import { Schema, model, connect } from "mongoose";

export async function dbConnect(): Promise<void> {
  await connect();
}
