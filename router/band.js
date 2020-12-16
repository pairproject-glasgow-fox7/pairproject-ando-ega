const router = require('express').Router()
const BandController = require('../Controllers/controller-band')

router.get('/', BandController.showBand)

router.get('/addBand', BandController.addBand)
router.post('/addBand', BandController.addBandPost)

router.get('/edit/:id', BandController.editBand)
router.post('/edit/:id', BandController.editBandPost)

router.get('/delete/:id', BandController.deleteBand)

module.exports = router