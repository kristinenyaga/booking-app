import express from "express";
import { createRoom } from "../controller/roomsController.js";
import { updateRoom } from "../controller/roomsController.js";
import { deleteRoom } from "../controller/roomsController.js";
import { getRoom } from "../controller/roomsController.js";

const roomsRoute = express.Router();

roomsRoute.route('/:hotelid').post(createRoom)
roomsRoute.route("/:id").get(getRoom);
roomsRoute.route("/:id").put(updateRoom);
roomsRoute.route("/:id/:hotelid").delete(deleteRoom);


export default roomsRoute;
