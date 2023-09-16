import express from "express";
import { registerUser } from "../controller/usersController.js";
import { login } from "../controller/usersController.js";
import { updateUser } from "../controller/usersController.js";
import { deleteUser } from "../controller/usersController.js";
import { getAllUsers } from "../controller/usersController.js";
import { getUser } from "../controller/usersController.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { verifyAdmin } from "../middleware/verifyToken.js";
const usersRoute = express.Router();

usersRoute.route('/register').post(registerUser)
usersRoute.route("/login").post(login);
usersRoute.route("/:id").get(getUser);
usersRoute.route("/").get(verifyToken,verifyAdmin,getAllUsers);
usersRoute.route("/:id").put(verifyToken,updateUser);
usersRoute.route("/:id").delete(verifyToken,deleteUser);



export default usersRoute;
