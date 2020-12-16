const router = require('express').Router()
const Band = require('./band')
const HomeController = require('../Controllers/controller-home')

router.get('/', HomeController.home)

router.use('/band', Band)
module.exports = router