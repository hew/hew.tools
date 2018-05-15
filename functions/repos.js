'use strict'

const express = require('express')
const request = require('request')
const schedule = require('node-schedule')

// init app
const app = express()

// middleware for CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  next()
})

// cache for repos JSON
let repos

// cache github request details
const options = {
  url: 'https://api.github.com/users/hew/repos',
  headers: {
    'User-Agent': 'hew'
  }
}

// init cron job to run every 5 minutes
const cron = schedule.scheduleJob('*/5 * * * *', () => {
  // make github request
  request(options, (error, response, body) => {
    if(!error && response.statusCode === 200) {
      // clean repos, sort by stars
      repos = JSON.parse(body)
        .map(x => ({
          name: x.name,
          desc: x.description,
          url: x.homepage || x.html_url,
          stars: x.stargazers_count,
          forks: x.forks_count
        }))
        .sort((a, b) => b.stars - a.stars)
    }
  })
})

// init route, send cached repos JSON
app.get('/', (req, res) => res.json(repos))

// start up server
app.listen(process.env.PORT || 8000)

