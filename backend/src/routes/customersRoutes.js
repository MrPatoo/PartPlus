import express from "express";
import customersController from "../controllers/CtrlCustomers.js";

const router = express.Router();

router.route("/")
.get(customersController.getCustomers)
.post(customersController.postCustomers)

router.route("/:id")
.put(customersController.putCustomers)
.delete(customersController.deleteCustomers)
.get(customersController.getCustomersById)

export default router;
