const Department = require('../models/departmentMod');

const options = {
  page: 1,
  limit: 10,
  collation: {
    locale: 'es'
  }
};

exports.getDepartments = async (req, res) => {
  try {
  const departments = await Department.paginate({}, options);
  res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);
    res.json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


exports.searchDepartments = async (req, res) => {
  try {
    const name = req.query.name || '';
    const description = req.query.description || '';
    // search by activity too pending
    const department = await Department.find( {$or: [ { name: { $regex: name, $options: 'i'}, description: { $regex: description, $options: 'i' }} ]}).limit(5);
    res.json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.createDepartment = async (req, res) => {
  const department = new Department(req.body);
  try {
    await department.save();
    res.status(201).json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.updateDepartment = async (req, res) => {
  const { id } = req.params;
  req.body.updateDate = Date.now();
  try {
    const department = await Department.findByIdAndUpdate(id, req.body, { new: true });
    res.json(department);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

exports.deleteDepartment = async (req, res) => {
  req.body.deleteDate = Date.now();
  req.body.isActive = false;
  try {
    await Department.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({message: 'Department deleted successfully'});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
