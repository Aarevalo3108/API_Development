const Employees = require('../models/employeesMod');
const router = require('express').Router();

const { hello,getEmployees, getEmployeesById, searchEmployees, createEmployees, updateEmployee, deleteEmployee } = require('../controllers/employeesCon');

router.get('/', hello);
router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployeesById);
router.get('/search/employees', searchEmployees);
router.post('/employees', createEmployees);
router.patch('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);

module.exports = router;