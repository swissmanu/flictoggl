var TogglClient = require('toggl-api')

module.exports = function (apiToken) {
  return new Promise(function (resolve, reject) {
    var toggl = new TogglClient({ apiToken: apiToken })

    toggl.getCurrentTimeEntry(function (err, timeEntry) {
      if (err) {
        reject({ status: 'error', message: 'Could not get current time entry' })
        toggl.destroy()
        return
      }

      if (timeEntry === null) {
        toggl.startTimeEntry({
          description: 'Presence'
        }, function (err) {
          if (err) {
            reject({ status: 'error', message: 'Could not get current time entry' })
          } else {
            resolve({ status: 'success', message: 'Started' })
          }
          toggl.destroy()
        })
      } else {
        toggl.stopTimeEntry(timeEntry.id, function (err) {
          if (err) {
            reject({ status: 'error', message: 'Could not stop time entry' })
          } else {
            resolve({ status: 'success', message: 'Stopped' })
          }
          toggl.destroy()
        })
      }
    })
  })
}
