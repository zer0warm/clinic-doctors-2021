const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const User = new Schema(
  {
    firstName: { type: String, maxlength: 30, required: true, trim: true },
    lastName: { type: String, maxlength: 30, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true, lowercase: true},
    hash: { type: String, required: true},
    role: {type: String, enum: ['user', 'admin'], default: 'admin', trim: true},
  },
  { timestamps: true },
);

User
    .virtual('pass')
    .set(function(pass) {
        this.hash = bcrypt.hashSync(pass,10);
    });

// User
//   .virtual('fullName')
//   .get(function(){
//     return `${this.firstName} ${this.lastName}`
//   })

User.methods.authenticate = function(pass) {
    return bcrypt.compareSync(pass, this.hash);
}

module.exports = mongoose.model('User', User);
