const express = require('express')
const axios = require("axios")
const app = express()
const port = 7777
const _= require('lodash')
const random = require('./random')


app.set('view engine', 'ejs')

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/compliment', (req, res)=>{
    compliment = _.sample(random.compliments)
    color = _.sample(random.colors)
    res.render("compliment", {compliment: compliment, color: color})
})




app.listen(port, () => {
    console.log(`listening at ${port}`)
})