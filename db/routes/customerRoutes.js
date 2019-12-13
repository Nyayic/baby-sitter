const express = require('express')
const Customer = require('../models/Customer')
const auth = require('../middleware/auth')
const Child = require('../models/Child')

const customerRouter = express.Router()

customerRouter.post('/customers', auth, async (req, res) => {
  const loggedInEmployee = req.employee
  if (loggedInEmployee.role !== 'supervisor') {
    return res
      .status(401)
      .send({ error: 'Only supervisors can register customers.' })
  }
  const customerInfo = req.body
  try {
    const customer = new Customer(customerInfo)
    await customer.save()
    res.status(200).send(customer)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
})

// Display customer Information
customerRouter.get('/customers/:id', auth, async (req, res) => {
  const id = req.params.id
  try {
    const customer = await Customer.findCustomerByID(id)
    if (customer.error) {
      return res.status(404).send(customer.error)
    }
    return res.status(200).send(customer)
  } catch (error) {
    res.status(400).send(err)
  }
})

// Assign child to parent
customerRouter.post('/customers/:id/children', auth, async (req, res) => {
  const id = req.params.id
  const childInfo = req.body
  try {
    const parent = await Customer.findCustomerByID(id)
    const child = new Child(childInfo)
    await child.save()
    parent.children.push(child)
    await parent.save()
    return res.status(200).send(parent)
  } catch (error) {
    res.status(400).send(error)
  }
})

module.exports = customerRouter
