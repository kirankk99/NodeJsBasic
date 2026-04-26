const express = require("express");
const leaverouter = express.Router();
const userleaveController = require("../controllers/userLeave.controllers");

//
//
leaverouter.get("/", userleaveController.getUserLeave);
leaverouter.post("/", userleaveController.applyNewLeave);

module.exports = leaverouter;
