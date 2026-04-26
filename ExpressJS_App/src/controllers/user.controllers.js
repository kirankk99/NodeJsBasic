const { readAllUsers, writeUsers } = require("../services/user.services");
const { createUserSchema } = require("../validators/user.validator");

//to avoide the try catch in every part and handle the catch for route to next() which redirect in express
const asyncHandler = require("../utils/asyncHandler");
//
const ApiError = require("../utils/ApiError");
//
//
exports.getUsers = asyncHandler(async (req, res) => {
  const users = await readAllUsers();
  res.json(users);
});

exports.getUserByHandler = asyncHandler(async (req, res) => {
  const users = await readAllUsers();
  const user = users.find((u) => u.id == req.params.id);
  if (!user) {
    // created a sample api error module to construct error code
    throw new ApiError("User not found", 404);
  }
  res.json(user);
});

exports.createUser = async (req, res, next) => {
  try {
    const { error } = createUserSchema.validate(req.body);
    if (error) {
      throw { status: 401, message: error.details[0].message };
    }

    const users = await readAllUsers(req, res);
    console.log("body data passed", req?.body);

    const newUser = {
      id: Date.now(),
      name: req?.body?.name,
      email: req?.body?.email,
      ...req.body,
    };

    users.push(newUser);
    await writeUsers(users);

    res.status(201).json(newUser);
  } catch (err) {
    console.warn("error", err);
    next(err);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const users = await readAllUsers();
    const user = users.find((u) => u.id == req.params.id);
    // This will become inconsistant when app scale at large level
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //updated error handle fun, refere error.midleware.js to check
    if (!user) {
      throw { status: "error", statusCode: 404, message: "User not found" };
    }

    // alternative

    //   class AppError extends Error {
    //   constructor(message, status) {
    //     super(message);
    //     this.status = status;
    //   }
    // }
    // throw new AppError("User not found", 404);

    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res) => {
  const users = await readAllUsers();
  const index = users.findIndex((u) => u.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = { ...users[index], ...req.body };
  await writeUsers(users);

  res.json(users[index]);
};

exports.deleteUser = async (req, res) => {
  const users = await readAllUsers();
  const filteredUserToDelete = users.filter((u) => u.id == req.params.id);

  const filteredUsers = users.filter((u) => u.id != req.params.id);

  await writeUsers(filteredUsers);

  res.json({
    message: "User deleted successfully",
    UserDetails: filteredUserToDelete,
  });
};
