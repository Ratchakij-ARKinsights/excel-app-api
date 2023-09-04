const { Op } = require("sequelize");
const { Employee } = require("../models");

exports.createEmployee = (emp) => Employee.create(emp);

exports.getAllEmployee = () => Employee.findAll();

exports.getEmployeeById = (id) => Employee.findByPk(id);
