const express = require('express')
const mongoose = require('mongoose')
const categories = require("./Routes/categories")

const app = express()

mongoose.connect('mongodb://127.0.0.1/learningPlatform')
.then(()=> console.log("Connected to mongoDB"))
.catch(()=> console.log("Unable to connect to mongoDB"))

app.use(express.json())
app.use(categories)

const port = process.env.PORT || 3000
app.listen(port,()=> console.log(`Listening on port ${port}...`))
