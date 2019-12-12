const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcryptjs = require('bcryptjs')

// Define collection and schema for Post
let kid = new Schema({
    childFirstName: {
    type: String
  },
  childLastName: {
    type: String
  },
  childParentTelephone: {
    type: String
  },
  childParentName: {
    type: String
  },
 
},
{
    collection: 'kids'
});


module.exports = mongoose.model('kids', kid);