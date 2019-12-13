const express = require('express')
const employeeRouter = express.Router()
const Employee = require('../models/Employee')
const auth = require('../middleware/auth')
const Child = require('../models/Child')

// Create employee
employeeRouter.post('/employees', async function (req, res) {
  const employee = new Employee(req.body)
  try {
    await employee.save()
    const token = await employee.generateAuthToken()
    return res.status(201).send({ employee, token })
  } catch (error) {
    return res.status(400).send(error)
  }
})
// login Employee
employeeRouter.post('/login', async function (req, res) {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(400).send({ message: 'Email and password are required' })
  }
  try {
    const employee = await Employee.findByCredentials(email, password)
    if (employee.error) {
      return res.status(404).send({ message: 'Invalid login credentials' })
    }
    const token = await employee.generateAuthToken()
    return res.status(200).send({ employee, token })
  } catch (error) {
    return res.status(400).send(error)
  }
})

// Assign child to Sitter
employeeRouter.get(
  '/employees/:employee_id/children/:childId',
  auth,
  async (req, res) => {
    const employeeId = req.params.employee_id
    const childId = req.params.childId
    const loggedInEmployee = req.employee
    if (loggedInEmployee.role !== 'supervisor') {
      return res
        .status(401)
        .send({ error: 'Only supervisors can assign children.' })
    }
    try {
      const employee = await Employee.findEmployeeByID(employeeId)
      if (employee.error) {
        return res.status(404).send({ error: employee.error })
      }
      if (employee.role !== 'sitter') {
        return res.status(400).send({ error: 'Only sitters can baby sit.' })
      }
      const child = await Child.findChildByID(childId)
      if (child.error) {
        return res.status(404).send({ error: child.error })
      }
      employee.children.push(child)
      await employee.save()
      return res.status(200).send(employee)
    } catch (error) {
      res.status(400).send(error)
    }
  }
)

employeeRouter.get('/employees/me', auth, async (req, res) => {
  res.send(req.employee)
})

module.exports = employeeRouter
