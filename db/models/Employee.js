const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
const { isEmail } = require('validator')
const jwt = require('jsonwebtoken')

// Define collection and schema for Post
const EmployeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true, //removes spaces
    maxlength: 45
  },
  lastName: {
    type: String,
    required: true,
    trim: true, //removes spaces
    maxlength: 45
  },
  telephone: {
    type: Number
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, 'Invalid email address']
  },
  children: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      firstName: String,
      lastName: String,
      age: Number
    }
  ],
  role: {
    type: String,
    enum: ['supervisor', 'sitter'],
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

EmployeeSchema.pre('save', async function (next) {
  // Hash the password before saving the user model
  const user = this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 6)
  }
  next()
})

EmployeeSchema.statics.findByCredentials = async (email, password) => {
  // Search for a user by email and password.
  const employee = await Employee.findOne({ email })
  if (!employee) {
    return { error: 'Invalid login credentials' }
  }
  const isPasswordMatch = await bcrypt.compare(password, employee.password)
  if (!isPasswordMatch) {
    return { error: 'Invalid login credentials' }
  }
  return employee
}
// Find employee by ID
EmployeeSchema.statics.findEmployeeByID = async employeeId => {
  const employee = await Employee.findById(employeeId)
  if (!employee) {
    return { error: 'Employee not found' }
  }
  return employee
}
// Generate na auth token to enable us track who is logged in
EmployeeSchema.methods.generateAuthToken = async function () {
  // Generate an auth token for the user
  const employee = this
  const token = jwt.sign(
    { _id: employee._id, email: employee.email },
    'WinterIsHere2020'
  )
  await employee.save()
  return token
}

const Employee = mongoose.model('Employee', EmployeeSchema)

module.exports = Employee
