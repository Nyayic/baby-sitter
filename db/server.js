// server.js

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./db.js')
const employeeRouter = require('./routes/employeeRouter')
const customerRouter = require('./routes/customerRoutes')

const PORT = 4000

//mongoose.Promise = global.Promise;
mongoose
  .connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      console.log('Database is connected')
    },
    err => {
      console.log('Can not connect to the database' + err)
    }
  )

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(employeeRouter)
app.use(customerRouter)
app.listen(PORT, function () {
  console.log('Server is running on Port:', PORT)
})
