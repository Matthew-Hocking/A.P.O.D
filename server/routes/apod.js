const request = require('superagent')

const express = require('express')
const router = express.Router()

require('dotenv').config()

const baseUrl = 'https://api.nasa.gov/planetary/apod'
const nasaKey = process.env.NASA_KEY

router.get("/", (req, res) => {
  const url = `${baseUrl}?api_key=${nasaKey}`
  return request.get(url)
    .then(response => {
    return res.json(response)
  })
})

module.exports = router