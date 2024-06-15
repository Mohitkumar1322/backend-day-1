require('dotenv').config()
const express = require('express')
//require module express we can use import express from 'express' if we use ES6
const app = express()
const port = 3000
//define port for server

app.get('/', (req, res) => {
    res.send('Hello World!')
    //send response to client by using res.send() and / is the root path
})

app.get('/twitter',(req,res) =>{
    res.send('Twitter')

})

app.get('/github',(req,res)=>{
    res.send('github.com')
})
// always / lagana padega otherwise error aayega
app.get('/about',(req,res)=>{
    res.send('<h1> please login at chai our code</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('youtube.com')
})
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${port}`)
    //run server on port 3000 and ()=>{} is callback function
})