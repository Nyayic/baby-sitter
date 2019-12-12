// post.model.js

const express = require('express');
const childrenRoutes = express.Router();

// Require Post model in our routes module
let Child = require('./children.model');

// Defined store route
childrenRoutes.route('/').post(function (req, res) {
  let child = new Child(req.body);
  child.save()
    .then(() => {
      res.status(200).json({'Child': 'Child is added successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});




module.exports = childrenRoutes;