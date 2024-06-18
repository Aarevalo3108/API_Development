const Employees = require('../models/employeesMod');
const Department = require('../models/departmentMod');

const options = {
  page: 1,
  limit: 10,
  collation: {
    locale: 'es'
  }
};


exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employees.paginate({}, options);
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


exports.getEmployeesById = async (req, res) => {
  try {
    const employee = await Employees.findById(req.params.id);
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


exports.searchEmployees = async (req, res) => {
  try {
    const name = req.query.name || '';
    const description = req.query.description || '';
    const office = req.query.office || '';
    const salary = req.query.salary || '';
    const INdate = req.query.INdate || '';
    const OUTdate = req.query.OUTdate || '';
    const number = req.query.number || '';
    const email = req.query.email || '';
    const address = req.query.address || '';
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


exports.createEmployees = async (req, res) => {
  const department = await Department.findOne({name: req.body.office});
  try {
    if (!department) {
      return res.status(400).json({ message: 'Department not found, please create a new one or check the spelling. Do you mean ' + (await Department.findOne({name: {$regex: req.body.office, $options: 'i'}})).name + '?' });
    }
    const employees = new Employees(req.body);
    await employees.save();
    res.status(201).json(employees);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}


exports.updateEmployees = async (req, res) => {
  try {
    const employees = await Employees.findByIdAndUpdate(req.params, req.body);
    res.json(employees);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}


exports.deleteEmployees = async (req, res) => {
  req.body.deleteDate = Date.now();
  req.body.isActive = false;
  try {
    await Employees.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({message: 'Employee deleted successfully'});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

