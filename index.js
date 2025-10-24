const express = require("express")
const router = require("./Router/router")
const app = express()
const PORT = 8000
app.use(router)
module.exports = app 
    



