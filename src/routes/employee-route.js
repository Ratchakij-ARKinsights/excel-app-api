const express = require("express");

const employeeController = require("../controllers/employee-controller");

const router = express.Router();

// Define a GET route
router.get("/", employeeController.getAllEmployee);

// Define a POST route
router.post("/create", employeeController.createEmployee);
// router.post("/order", createController.createOrder);

// Define a route with URL parameters
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Requested resource with ID ${id}`);
});

module.exports = router;
