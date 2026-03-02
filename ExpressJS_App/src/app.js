const express = require("express");
const userRoutes = require("./routes/user.routes");
const errorHandler = require("./middlewares/error.middleware");

// initialize the express app from app
const app = express();
// accepts the data passed from the api request client
app.use(express.json());
// this will handle the routing for user module
app.use("/users", userRoutes);
// handle error and return
app.use(errorHandler);
// at the end listen port to render your app
app.listen(9000, () => {
  console.log("Server running on 9000");
});
