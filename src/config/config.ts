require("dotenv").config();

const port = (process.env.PORT as unknown as number) || 5000;

const config = {
  port,
  host: "localhost",
};

export default config;
