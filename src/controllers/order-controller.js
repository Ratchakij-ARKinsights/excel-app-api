const { Order } = require("../models");
const createError = require("../utils/create-error");

exports.createOrder = async (req, res, next) => {
  try {
    const value = req.body;
    console.log(value);
    await Order.create(value);
    // console.log("--------------------------------");
    // console.log(value);
    // console.log("--------------------------------");

    // if (!value.leaderId) {
    //   value.leaderId = null;
    // }

    // const isEmployeeCreate = await employeeService.createEmployee(value);

    res.status(200).json({ message: "Success Created Order" });
  } catch (err) {
    next(err);
  }
};

exports.getAllOrder = async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      order: [
        ["date", "DESC"], // เรียงลำดับตามคอลัมน์ 'date' และใช้ 'DESC' เพื่อเรียงจากมากไปน้อย (วันที่ล่าสุดก่อน)
      ],
    });

    res.status(200).json({ orders });
  } catch (err) {
    next(err);
  }
};
