const Department = require('../models/departmentMod');
const router = require('express').Router();

const { getDepartments, getDepartmentById, searchDepartments, createDepartment, updateDepartment, deleteDepartment } = require('../controllers/departmentCon');


router.get('/departments', getDepartments);
router.get('/departments/:id', getDepartmentById);
router.get('/search/departments', searchDepartments);
router.post('/departments', createDepartment);
router.patch('/departments/:id', updateDepartment);
router.delete('/departments/:id', deleteDepartment);

module.exports = router;