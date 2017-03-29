var express = require('express')
var bodyParser = require('body-parser')
var toggl = require('./lib/toggl')
var app = express()

function send (res, statusCode, text) {
  res.status(statusCode).send(text)
}

app.set('port', (process.env.PORT || 5000))

app.post('/', bodyParser.urlencoded({ extended: false }), function (req, res) {
  var apiToken = req.body.apiToken || req.query.apiToken

  if (!apiToken || apiToken.length > 40) {
    send(res, 500, { status: 'error', message: 'Invalid API Token' })
    return
  }

  toggl(apiToken)
    .then(function (message) { send(res, 200, message) })
    .catch(function (message) { send(res, 500, message) })
})

app.listen(app.get('port'), function () {
  console.log('flictoggl HTTP server is running on port', app.get('port'))
})
