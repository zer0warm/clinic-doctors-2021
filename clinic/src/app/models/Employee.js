const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Employee = new Schema(
  {
    Name: { type: String, maxlength: 255, required: true },
    DoB: { type: String, maxlength: 255 },
    Gender: { type: String, maxlength: 255 },  
    Address: { type: String, maxlength: 255 },
    Email: { type: String, maxlength: 255 },
    PhoneNumber: { type: String, maxlength: 255 },
    Department: { type: String, maxlength: 255 },
    Position: { type: String, maxlength: 255 },
    Salary: { type: String, maxlength: 255 },
    slug: { type: String, slug: 'name', unique: true }, 
  },
  { timestamps: true },
);

mongoose.plugin(slug);
Employee.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('Employee', Employee, 'Employee');
