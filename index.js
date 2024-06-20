const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

mongoose.connect('mongodb://localhost:27017/EmployeesManager');

const employees = require('./routes/employeesRou');
const department = require('./routes/departmentRou');

app.use(
  employees,
  department
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})