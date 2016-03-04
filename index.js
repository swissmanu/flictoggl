var TogglClient = require('toggl-api')
var express = require('express')

var app = express();

function send(res, statusCode, text) {
  res.status(statusCode).send(text);
}

app.set('port', (process.env.PORT || 5000));

app.post('/:apiToken', function(req, res) {
  var apiToken = req.params.apiToken
  var toggl = new TogglClient({ apiToken: apiToken });

  toggl.getCurrentTimeEntry(function(err, timeEntry) {
    if(err) {
      send(res, 500, { status: 'error', message: 'Could not get current time entry' })
      return
    }

    if(timeEntry === null) {
      toggl.startTimeEntry({
        description: 'Presence'
      }, function(err) {
        if(err) {
          send(res, 500, { status: 'error', message: 'Could not get current time entry' })
        } else {
          send(res, 200, { status: 'started' })
        }
        toggl.destroy()
      })
    } else {
      toggl.stopTimeEntry(timeEntry.id, function(err) {
        if(err) {
          send(res, 500, { status: 'error', message: 'Could not stop time entry' })
        } else {
          send(res, 200, { status: 'stopped' })
        }
        toggl.destroy()
      })
    }
  })
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})
