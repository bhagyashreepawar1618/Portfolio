import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
const recievedInformation = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  console.log("info is =", name, email, message);
  //if name or email is not given throw an api error
  if (!name && !email && !message) {
    throw new ApiError(400, "All feilds are required");
  }

  const user = await User.create({
    name,
    email,
    message,
  });

  if (user) {
    console.log("Your response is sent successfully ..!!");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Response Sent Successfully"));
});

export { recievedInformation };
