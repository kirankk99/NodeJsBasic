const { readAllUsers, writeUsers } = require("../services/user.services");
//
exports.getUsers = async (req, res) => {
  const users = await readAllUsers();
  res.json(users);
};

exports.createUser = async (req, res) => {
  const users = await readAllUsers();

  const newUser = {
    id: Date.now(),
    ...req.body,
  };

  users.push(newUser);
  await writeUsers(users);

  res.status(201).json(newUser);
};

exports.getUserById = async (req, res) => {
  const users = await readAllUsers();
  const user = users.find((u) => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
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
  const filteredUsers = users.filter((u) => u.id != req.params.id);

  await writeUsers(filteredUsers);

  res.json({ message: "User deleted" });
};
