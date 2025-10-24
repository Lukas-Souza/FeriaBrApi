const FERIADOSDATA = require("../Data/DB_Dates")
const express = require("express")
const server = express()
module.exports = [
    server.get("/", (req, res) => {
        res.json(
            [   { "version": 1.0 },
                { "quais feriados tem no mes do mes": "/domes?mes=[number]" },
                { "quais feriados nacional tem no mes do mes": "/domes/nacional?mes=[number]" }
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

    }),
    server.get( "/domes/nacional", (req, res) =>{
        const {mesNc} = req.query;
        if (mesNc != undefined) {

        let JsonResul = [] 
        for (let i = 0; i < FERIADOSDATA.length; i++) {
            if (FERIADOSDATA[i].mes ==  mesNc &&  FERIADOSDATA[i].tipo == "nacional") {
                JsonResul.push(FERIADOSDATA[i])
            }
        }
        res.json(JsonResul)            
        } else {
            res.json(FERIADOSDATA)
        }
    })
]