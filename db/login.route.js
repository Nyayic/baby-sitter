const express = require('express');
const loginRoute = express.Router();
const post  = require('./models/Employee')

loginRoute.post('/', async(req, res) => {
    console.log(req.body)
    try {
        
        const user = await post.authenticate(req.body.username, req.body.password);
        console.log(user)
       // res.send("hey " + user.firstname + " " + user.lastname)
       req.session.user = user;
       res.redirect("/register")
    }catch(error){
      console.log(error)
        //res.send("Login Failed")
       // res.redirect('register/search')
       res.render("/login",{error:"failed to log in"})
    }
  })

  module.exports = loginRoute;