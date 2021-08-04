import express from "express";
import config from "./config/config";
import router from "./routes/users";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.listen(config.port, () => {
  console.log(`Server is started at http://${config.host}:${config.port}`);
  // connect to db
  // connect();
});
