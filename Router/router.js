const { version } = require("react")
const FERIADOSDATA = require("../Data/DB_Dates")
const express = require("express")
const server = express()
module.exports = [
    server.get("/", (req, res) => {
        res.json(
            [{ "version": 1.0 },
                { "endpoint": "/domes" }
]
        )
    }),
    server.get("/domes",  (req, res) => {
        const { mes } = req.query
        if (mes != undefined) {

        let JsonResul = [] 
        for (let i = 0; i < FERIADOSDATA.length; i++) {
            if (FERIADOSDATA[i].mes == mes) {
                JsonResul.push(FERIADOSDATA[i])
            }
        }
        res.json(JsonResul)            
        } else {
            res.json(FERIADOSDATA)
        }

    })
]