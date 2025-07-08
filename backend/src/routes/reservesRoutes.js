import express from "express";
import reservesController from "../controllers/CtrlReserves.js";

const router = express.Router();

router.route("/")
.get(reservesController.getReserves)
.post(reservesController.postReserves)

router.route("/:id")
.put(reservesController.putReserves)
.delete(reservesController.deleteReserve)
.get(reservesController.getReservesById)

export default router;