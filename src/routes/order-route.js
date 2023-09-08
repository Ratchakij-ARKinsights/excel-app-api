const express = require("express");

const orderController = require("../controllers/order-controller");

const router = express.Router();

// GET
router.get("/", orderController.getAllOrder);
router.get("/total-price-by-agent", orderController.getTotalPriceByAgentId);

// POST
router.post("/", orderController.createOrder);

module.exports = router;
