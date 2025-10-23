const express = require("express")
const router = require("./Router/router")
const server = express()
const PORT = 8000

server.use(router)



server.listen(PORT, ()=> {
    console.log("API rodando, http://localhost:"+PORT)
})

    



