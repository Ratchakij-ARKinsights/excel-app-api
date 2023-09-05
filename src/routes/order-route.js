const express = require("express");

const orderController = require("../controllers/order-controller");

const router = express.Router();

// GET
router.get("/", orderController.getAllOrder);

// POST
router.post("/", orderController.createOrder);

module.exports = router;
