const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

const apodRoute = require('./routes/apod')

server.use('/api/v1/apod', apodRoute)


module.exports = server
