const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const Schema = mongoose.Schema;

const employeesSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  office: { type: String, required: true },
  salary: { type: Number, required: true },
  INdate: { type: String, required: true },
  OUTdate: { type: String, required: true },
  number: { type: Number, required: true },
  email: {type: String, unique: true, required: true},
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    postalCode: { type: String, required: true }
  },
  creationDate: { type: Date, default: Date.now },
  updateDate: { type: Date, default: null },
  deleteDate: { type: Date, default: null },
  isActive: { type: Boolean, default: true }
});

employeesSchema.plugin(mongoosePaginate);

const Employees = mongoose.model('Employees', employeesSchema);

Employees.paginate().then({});

module.exports = Employees;