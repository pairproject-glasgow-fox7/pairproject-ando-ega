const { Band, Event } = require('../models')

class BandController{
    static showBand(req, res){
        Band.findAll()
        .then(data =>{
            res.render('band', {
                data
            })
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static addBand(req, res){
        res.render('addBand')
    }

    static addBandPost(req, res){
        let obj = {
            band_name: req.body.band_name,
            band_origin: req.body.band_origin,
            band_member: req.body.band_member
        }

        Band.create(obj)
        .then(data =>{
            res.redirect('/band')
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static editBand(req, res){
        let id = +req.params.id

        Band.findByPk(id)
        .then(data =>{
            res.render('editBand', {
                data
            })
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static editBandPost(req, res){
        let id = +req.params.id
        let obj = {
            band_name: req.body.band_name,
            band_origin: req.body.band_origin,
            band_member: req.body.band_member
        }

        Band.update(obj, {where: {id}})
        .then(data =>{
            res.redirect('/band')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static deleteBand(req, res){
        let id = +req.params.id

        Band.destroy({where:{id}})
        .then(data =>{
            res.redirect('/band')
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static seeEvent(req, res){
        let id = req.params.id
        Band.findByPk(id, {include: Event})
        .then(data =>{ 
            //res.send(data)
            res.render('seeEvent', {data})
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static filter(req, res){
        Band.moreThanOne()
        .then(data=>{
            //res.send(data)
            res.render('filter', {
                data
            })
        })
        .catch(err =>{
            res.send(err)
        })
    }
}

module.exports = BandController