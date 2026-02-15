import { Router } from "express";
import { recievedInformation } from "../controllers/user.controller.js";
const router = Router();

router.route("/sendmessage").post(recievedInformation);

export default router;
