const Employees = require('../models/employeesMod');
const router = require('express').Router();

const { getEmployees, getEmployeesById, createEmployees, updateEmployees, deleteEmployees } = require('../controllers/employeesCon');


router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployeesById);
// router.get('/search/employees', searchEmployees);
router.post('/employees', createEmployees);
router.put('/employees/:id', updateEmployees);
router.delete('/employees/:id', deleteEmployees);

module.exports = router;