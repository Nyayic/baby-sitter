const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcryptjs = require('bcryptjs')

// Define collection and schema for Post
let Register = new Schema({
  StaffFirstName: {
    type: String
  },
  StaffLastName: {
    type: String
  },
  StaffTelephone: {
    type: Number
  },
  StaffEmail: {
    type: String
  },
  StaffRole:{
    type:String
  },
  StaffPassword: {
    type: String
  },
 
},
{
    collection: 'registers'
});


/* Register.statics.authenticate = async function (username, password) {  
  const user = await this.findOne({ username: username })
  if (!user) {
      throw new Error('User not found.');
  }
  const match = await bcryptjs.compare(password, user.password)
  if (match) {
      return user;
  }
} */

module.exports = mongoose.model('Registers', Register);