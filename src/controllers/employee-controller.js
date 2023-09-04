const employeeService = require("../services/employee-service");
const createError = require("../utils/create-error");

exports.createEmployee = async (req, res, next) => {
  try {
    const value = req.body;
    // console.log("--------------------------------");
    // console.log(value);
    // console.log("--------------------------------");

    if (!value.leaderId) {
      value.leaderId = null;
    }

    const isEmployeeCreate = await employeeService.createEmployee(value);

    res.status(200).json({ message: "Create Success" });
  } catch (err) {
    next(err);
  }
};

exports.getAllEmployee = async (req, res, next) => {
  try {
    const employees = await employeeService.getAllEmployee();

    res.send({ employees });
  } catch (err) {
    next(err);
  }
};
