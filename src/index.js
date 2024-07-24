import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(
        "\x1b[32m",
        `⚙️   Server is running at port : ${process.env.PORT}`,
        "\x1b[0m"
      );
    });
  })
  .catch((err) => {
    console.log("\x1b[31m", "MONGO db connection failed !!! ", err, "\x1b[0m");
  });
