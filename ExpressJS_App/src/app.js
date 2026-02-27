const express = require("express");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use("/users", userRoutes);
app.use(express.json());

app.listen(9000, () => {
  console.log("Server running on 9000");
});
