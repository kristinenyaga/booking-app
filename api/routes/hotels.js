import express from "express";
import { createHotel } from "../controller/hotelController.js";
import { updateHotel } from "../controller/hotelController.js";
import { deleteHotel } from "../controller/hotelController.js";
import { getHotel } from "../controller/hotelController.js";
import { getAllHotels } from "../controller/hotelController.js";
const hotelsRouter = express.Router();

hotelsRouter.route("/").get(getAllHotels);
hotelsRouter.route('/').post(createHotel)
hotelsRouter.route("/:id").put(updateHotel);
hotelsRouter.route("/:id").get(getHotel);
hotelsRouter.route("/:id").delete(deleteHotel);




export default hotelsRouter;
