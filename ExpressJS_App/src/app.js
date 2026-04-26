const express = require("express");
const userRoutes = require("./routes/user.routes");
const errorHandler = require("./middlewares/error.middleware");

// initialize the express app from app
const app = express();
const PORT = 9000;
// accepts the data passed from the api request client
app.use(express.json());
// this will handle the routing for user module
app.use("/users", userRoutes);
// handle error and return
app.use(errorHandler);
// at the end listen port to render your app
// app.listen(9000, () => {
//   console.log("Server running on 9000");
// });

// modification to handle open broswer when server is ready. Some time the broswer not load the server so call back to the listen port
app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);

  const open = (await import("open")).default;
  open(`http://localhost:${PORT}/users`);
});
