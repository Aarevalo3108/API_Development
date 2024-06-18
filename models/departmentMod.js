const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  creationDate: { type: Date, default: Date.now },
  updateDate: { type: Date, default: null },
  deleteDate: { type: Date, default: null },
  isActive: { type: Boolean, default: true }
});

departmentSchema.plugin(mongoosePaginate);

const Department = mongoose.model('Department', departmentSchema);

Department.paginate().then({});

module.exports = Department;