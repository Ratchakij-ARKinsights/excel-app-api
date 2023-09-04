const employeeRepository = require("../repositories/employee-repository");

exports.createEmployee = (emp) => employeeRepository.createEmployee(emp);

exports.getAllEmployee = () => employeeRepository.getAllEmployee();

exports.getEmployeeById = (id) => employeeRepository.getEmployeeById(id);
