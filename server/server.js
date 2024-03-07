const app = require("./app");
const connectDB = require("./config/db");


const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });


//connection db
connectDB('');



try {
  const port = process.env.PORT || 4000;
  const env = process.env.NODE_ENV || "development";

  app.listen(port, () => {
    console.log(`Server is listening on PORT : ${port} in ${env} environment`);
  });
} catch (err) {
  console.error("Error starting server:", err);
}
