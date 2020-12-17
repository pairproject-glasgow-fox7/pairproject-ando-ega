const express = require('express')
const app = express()
const port = 3000
const router = require('./router/index')
const member = require('./helper/members')
const session = require('express-session')


app.use(session({
    secret: 'eghadhiwa',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  }))
  
//set
app.set('view engine', 'ejs')

//middleware
app.use(express.urlencoded({extended: false}))
app.locals.member = member

//router
app.use('/', router)

//driver
app.listen(port, ()=>{
    console.log(`Listen to ${port}`)
})