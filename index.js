const express = require("express")
const router = require("./Router/router")
const cors = require("cors");
const app = express()
const PORT = 8000
app.use(cors())
app.use(router)

app.use(express.json());
module.exports = app 
    



