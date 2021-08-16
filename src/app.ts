import { dbConnect } from "./db/dbConnect";
import express from "express";
import config from "./config/config";
import router from "./routes/users";

const app = express();
app.use(express.static("uploads/"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.listen(config.port, async () => {
  console.log(`Server is started at http://${config.host}:${config.port}`);
  // connect to db
  try {
    await dbConnect().then(() => {
      console.log(`db connected`);
    });
  } catch (error) {
    console.log(`error connected to db: `, error);
    process.exit(1);
  }
});
