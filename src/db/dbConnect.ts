import config from "../config/config";
import { connect } from "mongoose";

export async function dbConnect(): Promise<void> {
  await connect(config.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
}
