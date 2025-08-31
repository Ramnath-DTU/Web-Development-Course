const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

// app.use(express.static("public"))

app.use('/blog', blog)

//Middleware 1 - Logger for our application
app.use((req, res, next) => {
  console.log(req.headers)
  req.harry = "I am harry";//it will execute second after first in orderwise
  fs.appendFileSync("logs.txt",`${crypto.randomUUID()} is a ${req.method}\n`)
  console.log(`${crypto.randomUUID()} is a ${req.method}\n`)
  // res.send("Hacked by Middleware 1")
  next()
})

//Middleware 2
app.use((req, res, next) => {
  console.log('m2')
  req.harry = "I am Rohan"; //it will execute first in orderwise
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello about!' + req.harry)
})

app.get('/contact', (req, res) => {
  res.send('Hello conatct!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})