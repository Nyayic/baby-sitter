// post.model.js

const express = require('express');
const registerRoutes = express.Router();

// Require Post model in our routes module
let Register = require('./register.model');

// Defined store route
registerRoutes.route('/').post(function (req, res) {
  let register = new Register(req.body);
  register.save()
    .then(() => {
      res.status(200).json({'Staff': 'Staff is added successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});






module.exports = registerRoutes;