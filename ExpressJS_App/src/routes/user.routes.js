const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controllers");

router.get("/", userController.getUsers);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/byHandler/:id", userController.getUserByHandler);
// if path and end points are similer , check whether path clash each other
// if the below url kept at top, calling byHandler will cinsidered as an id and never satisfy the condition
router.get("/:id", userController.getUserById);

module.exports = router;
