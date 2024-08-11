const Employees = require('../models/employeesMod');
const Department = require('../models/departmentMod');

const regex = {
  text: /^[a-zA-Z\s]{1,30}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{1,}$/,
  phone: /^\d{11}$/,
  salary: /^\d{1,5}$/,
  time: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
};
const validation = (data) => {
  if(!regex.text.test(data.name) || !regex.text.test(data.lastname) || !regex.text.test(data.office) ||
    !regex.salary.test(data.salary) || !regex.email.test(data.email) || !regex.phone.test(data.number) ||
    !regex.time.test(data.INdate) || !regex.time.test(data.OUTdate) || !regex.text.test(data.address.street) ||
    !regex.text.test(data.address.city) || !regex.text.test(data.address.country) || !regex.text.test(data.address.postalCode)) {
      return false;
    }
    return true;
};

// options for pagination
const options = {
  page: 1,
  limit: 12,
  collation: {
    locale: 'es'
  }
};

exports.hello = (req,res) => {
  res.json('Hello');
}

// usage with GET http://localhost:3000/employees parameters: page
exports.getEmployees = async (req, res) => {
  options.page = parseInt(req.query.page) || 1;
  options.limit = parseInt(req.query.limit) || 12;
  try {
    const employees = await Employees.paginate({isActive: true}, options);
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


// usage with GET http://localhost:3000/employees/:id
exports.getEmployeesById = async (req, res) => {
  try {
    const employee = await Employees.paginate({ _id: req.params.id, isActive: true}, options);
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


// usage with GET http://localhost:3000/employees parameters: page, name, lastname, office, salary, INdate, OUTdate, number, email, street, city, country, postalCode, isActive
exports.searchEmployees = async (req, res) => {
  options.page = parseInt(req.query.page) || 1;
  const searchCriteria = [];
  try {
    const name = req.query.name;
    if(name) searchCriteria.push({ name: { $regex: name, $options: 'i' } });
    const lastname = req.query.lastname;
    if(lastname) searchCriteria.push({ lastname: { $regex: lastname, $options: 'i' } });
    const office = req.query.office;
    if(office) searchCriteria.push({ office: { $regex: office, $options: 'i' } });
    const salary = req.query.salary;
    if(salary) searchCriteria.push({ salary: salary });
    const INdate = req.query.INdate;
    if(INdate) searchCriteria.push({ INdate: { $regex: INdate, $options: 'i' } });
    const OUTdate = req.query.OUTdate;
    if(OUTdate) searchCriteria.push({ OUTdate: { $regex: OUTdate, $options: 'i' } });
    const number = req.query.number;
    if(number) searchCriteria.push({ number: number });
    const email = req.query.email;
    if(email) searchCriteria.push({ email: { $regex: email, $options: 'i' } });
    const street = req.query.street;
    if(street) searchCriteria.push({ address: { street: { $regex: street, $options: 'i' } } });
    const city = req.query.city;
    if(city) searchCriteria.push({ address: { city: { $regex: city, $options: 'i' } } });
    const country = req.query.country;
    if(country) searchCriteria.push({ address: { country: { $regex: country, $options: 'i' } } });
    const postalCode = req.query.postalCode;
    if(postalCode) searchCriteria.push({ address: { postalCode: { $regex: postalCode, $options: 'i' } } });
    const employees = await Employees.paginate({ $or: searchCriteria, isActive: true }, options);
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


// usage with POST http://localhost:3001/employees
exports.createEmployees = async (req, res) => {
  const department = await Department.findOne({ name: req.body.office });
  try {
    if (!department) {
      return res.status(400).json({ message: 'Department not found, please create a new one or check the spelling.' });
    }
    if (!validation(req.body)) {
      return res.status(400).json({ message: 'Invalid data, please check JSON and try again.' });
    }
    const employee = new Employees(req.body);
    await employee.save();
    const data = await Employees.paginate({_id: employee._id}, options);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
}


// usage with PATCH http://localhost:3001/employees/:id
exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    req.body.updateDate = Date.now();
    const employees = await Employees.findByIdAndUpdate(id, req.body, { new: true });
    const pagination = await Employees.paginate({_id: employees._id}, options);
    res.status(200).json(pagination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}


// usage with DELETE http://localhost:3001/employees/:id, soft delete
exports.deleteEmployee = async (req, res) => {
  req.body.deleteDate = Date.now();
  req.body.isActive = false;
  try {
    const employee = await Employees.findByIdAndUpdate({ _id: req.params.id, isActive: true}, req.body);
    const pagination = await Employees.paginate({_id: employee._id}, options);
    res.status(200).json(pagination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

