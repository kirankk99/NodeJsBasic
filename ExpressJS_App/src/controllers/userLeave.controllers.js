const {
  readAlluserLeave,
  editUserLeave,
} = require("../services/leaveData.services");
//
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const { createUserleaveSchema } = require("../validators/userleave.validator");
//

exports.getUserLeave = asyncHandler(async (req, res) => {
  const allUsersLeave = await readAlluserLeave();
  if (!allUsersLeave) {
    throw new ApiError("Users leave data empty", 401);
  }
  res.json(allUsersLeave);
});

//
exports.applyNewLeave = asyncHandler(async (req, res) => {
  const { editerror } = createUserleaveSchema.validate(req.body);
  if (editerror) {
    console.log("editerror", editerror);
    throw new ApiError("body contain invalid data", 400);
  } else {
    const allUsersLeave = await readAlluserLeave();
    const applyingUserArray = allUsersLeave?.[req?.body?.userId];
    const newLeave = {
      id: Date.now(),
      userId: req?.body?.userId || null,
      name: req?.body?.name,
      email: req?.body?.email,
      startDate: req?.body?.startDate,
      endDate: req?.body?.endDate,
      type: req?.body?.type,
      numOfDays: req?.body?.numOfDays,
    };
    applyingUserArray.push(newLeave);
    const newObj = { ...allUsersLeave, [req?.body?.userId]: applyingUserArray };
    await editUserLeave(newObj);
    res.status(201).json(newLeave);
  }
});
