const router = require('express').Router()
const EventController = require('../Controllers/controller-event')
const {isAdmin} = require('../middlewares/middlewarelogin')

router.get('/', EventController.showEvent)

router.get('/addEvent', isAdmin, EventController.addEvent)
router.post('/addEvent', isAdmin, EventController.addEventPost)

router.get('/edit/:id', isAdmin, EventController.editEvent)
router.post('/edit/:id', isAdmin, EventController.editEventPost)

router.get('/delete/:id', isAdmin, EventController.deleteEvent)

router.get('/addBand/:id', isAdmin, EventController.addBandtoEvent)
router.post('/addBand/:id', isAdmin, EventController.addBandtoEventPost)

module.exports = router