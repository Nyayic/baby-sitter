// post.model.js

const express = require('express');
const childrenRoutes = express.Router();

// Require Post model in our routes module
let Children = require('./children.model');

// Defined store route
childrenRoutes.route('/').post(function (req, res) {
  let children = new Children(req.body);
  children.save()
    .then(() => {
      res.status(200).json({'Child': 'Child is added successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});




module.exports = childrenRoutes;