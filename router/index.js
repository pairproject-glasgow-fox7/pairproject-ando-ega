const router = require('express').Router()
const Band = require('./band')
const Event = require('./event')
const HomeController = require('../Controllers/controller-home')
const {isLogin, isAdmin} = require('../middlewares/middlewarelogin')

router.get('/home', HomeController.home)

router.post('/home', HomeController.loginPost)

router.get('/register', HomeController.register)
router.post('/register', HomeController.registerPost)

router.use(isLogin)
router.use('/band', Band)
router.use('/event', Event)

module.exports = router