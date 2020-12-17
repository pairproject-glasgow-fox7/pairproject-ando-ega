const {User} = require('../models')
const {compare} = require('../helper/bcrypt')
const nodemailer = require('nodemailer')

class HomeController{
    static home (req, res){
        let errors = ''
        if(req.query.error){
            errors = req.query.error
        }
        res.render('home', {errors})
    }

    static register(req, res){
        res.render('register')
    }

    static registerPost(req, res){
        let obj = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            role: req.body.role
        }
        User.create(obj)
        .then(data =>{
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                  user: 'dexterincasee@gmail.com',
                  pass: 'hawkerland'
                },
                });
        
            var mailOptions = {
            from: 'Xander <dexterincasee@gmail.com>',
            to: obj.email,
            subject: obj.username,
            html: 'Hello thank you for register',
            }
            transporter.sendMail(mailOptions, function(err, res){
                if(err){
                    console.log('Mail not sent');
                } else {
                    console.log('Mail sent');
                }
            });
            res.redirect('/home')
        })
        .catch(err =>{
            let errMsg = []
            err.errors.forEach(el=>{
                errMsg.push(el.message)
            })
            res.send(errMsg)
        })
    }

    static loginPost(req, res){
        let obj = {
            username: req.body.username,
            password: req.body.password
        }
        
        //console.log(obj)
        User.findOne({where: {username : obj.username}})
        .then(data =>{
            //console.log(data)
            if(data){
                //console.log(data)
                let isValid = compare(obj.password, data.password)
                //console.log(isValid)
                if(isValid){
                    req.session.userId = data.id
                    req.session.userRole = data.role
                    res.redirect('/event')
                } else{
                    res.redirect('/home?error=Username dan Password Invalid!!')
                }
            }else {
                res.redirect('/home?error=Username tidak ada dalam Database!!')
            }
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = HomeController