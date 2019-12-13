const mongoose = require('mongoose')

let ChildSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  age: {
    type: Number,
    required: true
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  }
})

ChildSchema.statics.findChildByID = async childId => {
  const child = await Child.findById(childId)
  if (!child) {
    return { error: 'Child not found' }
  }
  return child
}

const Child = mongoose.model('Child', ChildSchema)

module.exports = Child
