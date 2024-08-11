const Department = require('../models/departmentMod');

// options for pagination
const options = {
  page: 1,
  limit: 12,
  collation: {
    locale: 'es'
  }
};

const regex = {
  text: /^[a-zA-Z\s]{1,30}$/,
  longText: /^[a-zA-Z0-9\s,'-]{1,300}$/
};

const validation = (data) => {
  if(!regex.text.test(data.name) || !regex.longText.test(data.description)){
    return false
  }
  return true
}

// usage with GET http://localhost:3000/departments parameters: page
exports.getDepartments = async (req, res) => {
  try {
  options.page = parseInt(req.query.page) || 1;
  options.limit = parseInt(req.query.limit) || 12;
  const departments = await Department.paginate({}, options);
  res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


// usage with GET http://localhost:3000/departments/:id
exports.getDepartmentById = async (req, res) => {
  try {
    const department = await Department.paginate({_id: req.params.id}, options);
    res.json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


// usage with GET http://localhost:3000/departments parameters: page, name, description, isActive
exports.searchDepartments = async (req, res) => {
  try {
    options.page = parseInt(req.query.page) || 1;
    const searchCriteria = [];
    const name = req.query.name;
    if(name) searchCriteria.push({ name: { $regex: name, $options: 'i' } });
    const description = req.query.description;
    if(description) searchCriteria.push({ description: { $regex: description, $options: 'i' } });
    const isActive = req.query.isActive;
    if(isActive) searchCriteria.push({ isActive: isActive });
    const department = await Department.paginate({ $or: searchCriteria }, options);
    res.json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


// usage with POST http://localhost:3000/departments
exports.createDepartment = async (req, res) => {
  console.log(req.body);
  try {
    if (!validation(req.body)) {
      return res.status(400).json({ message: 'Invalid data, please check JSON and try again.' });
    }
    const department = new Department(req.body);
    await department.save();
    const paginate = await Department.paginate({_id: department._id}, options);
    res.status(201).json(paginate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


// usage with PATCH http://localhost:3000/departments/:id
exports.updateDepartment = async (req, res) => {
  const { id } = req.params;
  req.body.updateDate = Date.now();
  try {
    const {_id} = await Department.findByIdAndUpdate(id, req.body, { new: true });
    const paginate = await Department.paginate({_id}, options);
    res.status(200).json(paginate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}


// usage with DELETE http://localhost:3000/departments/:id, soft delete
exports.deleteDepartment = async (req, res) => {
  req.body.deleteDate = Date.now();
  req.body.isActive = false;
  try {
    const { _id } = await Department.findByIdAndUpdate(req.params.id, req.body);
    const paginate = await Department.paginate({_id}, options);
    res.status(200).json(paginate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
