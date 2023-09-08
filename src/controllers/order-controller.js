const { Employee, Order, sequelize } = require("../models");
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

exports.getTotalPriceByAgentId = async (req, res, next) => {
  try {
    const totalPriceByAgentId = await Order.findAll({
      attributes: [
        [sequelize.col("Employee.id"), "agentId"],
        [sequelize.col("Employee.name"), "agentName"],
        [sequelize.col("Employee.type"), "agentType"],
        [sequelize.fn("SUM", sequelize.col("price")), "sumPrice"],
        [sequelize.col("Employee.leader_id"), "leaderId"],
      ],
      include: [
        {
          model: Employee,
          // as: "Agent",
          attributes: [],
        },
      ],
      group: ["agent_id"],
      order: [[sequelize.fn("SUM", sequelize.col("price")), "DESC"]],
      raw: true, // Return raw data
    });
    res.status(200).json({ totalPriceByAgentId });
  } catch (err) {
    next(err);
  }
};

