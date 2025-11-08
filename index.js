const express = require("express")
const router = require("./Router/router")
const app = express()
const PORT = 8000
app.use(router)
app.use(express.json());
module.exports = app 
    



