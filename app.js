const express = require('express')
const app = express()
const port = 3000
const router = require('./router/index')

//set
app.set('view engine', 'ejs')

//middleware
app.use(express.urlencoded({extended: false}))

//router
app.use('/', router)

//driver
app.listen(port, ()=>{
    console.log(`Listen to ${port}`)
})