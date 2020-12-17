const {Event, Band, BandEvent} = require('../models')

class EventController {
    static showEvent(req, res){
        Event.findAll()
        .then(data =>{
            res.render('event', {data})
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static editEvent(req, res){
        let id = req.params.id

        Event.findByPk(id)
        .then(data =>{
            res.render('editEvent', {
                data
            })
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static editEventPost(req, res){
        let id = req.params.id
        let obj = {
            event_name: req.body.event_name,
            event_location: req.body.event_location,
            event_schedule: req.body.event_schedule
        }

        Event.update(obj, {where :{id}})
        .then(data =>{
            res.redirect('/event')
        })
        .catch(err =>{
            let errMsg = []
            err.errors.forEach(el=>{
                errMsg.push(el.message)
            })
            res.send(errMsg)
        })
    }

    static deleteEvent(req, res){
        let id = req.params.id
        Event.destroy({where: {id}})
        .then(data =>{
            res.redirect('/event')
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static addBandtoEvent(req, res){
        let id = req.params.id
        let temp

        Band.findAll()
        .then(data =>{
            temp = data
            return Event.findByPk(id, {include: Band})
        })
        .then(data =>{
            //res.send(data)
            res.render('addBandtoEvent', {
                data, temp
            })
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static addBandtoEventPost(req, res){
        let id = req.params.id
        let obj = {
            eventId: id,
            bandId: req.body.bandId,
            queue_perform: req.body.queue_perform
        }

        BandEvent.create(obj)
        .then(data =>{
            res.redirect(`/event/addBand/${id}`)
        })
        .catch(err =>{
            let errMsg = []
            err.errors.forEach(el=>{
                errMsg.push(el.message)
            })
            res.send(errMsg)
        })
    }

    static addEvent(req, res){
        res.render('addEvent')
    }

    static addEventPost(req, res){
        let obj = {
            event_name: req.body.event_name,
            event_location: req.body.event_location,
            event_schedule: req.body.event_schedule
        }

        Event.create(obj)
        .then(data =>{
            res.redirect('/event')
        })
        .catch(err =>{
            let errMsg = []
            err.errors.forEach(el=>{
                errMsg.push(el.message)
            })
            res.send(errMsg)
        })
    }
}

module.exports = EventController