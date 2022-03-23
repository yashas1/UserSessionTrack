import express from "express";

import {regesterUser,logedUser,getUsers} from "../controllers/usercontrollers.js"
 
const router = express.Router();



router.route("/").post(regesterUser).get(getUsers)

router.post("/login", logedUser);
export default router;