const mongoose = require('mongoose')

let CustomerSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  email: {
    type: String
  },
  children: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      firstName: String,
      lastName: String,
      age: Number
    }
  ]
})

CustomerSchema.statics.findCustomerByID = async customer_id => {
  const customer = await Customer.findById(customer_id)
  if (!customer) {
    return { error: 'Customer not found' }
  }
  return customer
}

const Customer = mongoose.model('Customer', CustomerSchema)

module.exports = Customer
