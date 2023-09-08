const express = require("express");

const comTierController = require("../controllers/comTier-controller");

const router = express.Router();

// GET
router.get("/", comTierController.getComTier);

// POST
// router.post("/", orderController.createOrder);

module.exports = router;
