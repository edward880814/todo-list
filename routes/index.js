// routes/index.js
const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const todos = require('./modules/todos')
const users = require('./modules/users')  // add this

router.use('/', home)
router.use('/todos', todos)
router.use('/users', users)  // add this

module.exports = router