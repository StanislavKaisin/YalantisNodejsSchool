require("dotenv").config();

const port = (process.env.PORT as unknown as number) || 5000;
const dbURI = process.env.dbURI;

const config = {
  port,
  host: "localhost",
  dbURI,
};

export default config;
