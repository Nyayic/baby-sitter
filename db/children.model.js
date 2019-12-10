const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcryptjs = require('bcryptjs')

// Define collection and schema for Post
let Children = new Schema({
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
    collection: 'childrens'
});


module.exports = mongoose.model('Childrens', Children);