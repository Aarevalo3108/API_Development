const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/EmployeesManager');

const employees = require('./routes/employeesRou');
const department = require('./routes/departmentRou');

app.use(
  employees,
  department
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})