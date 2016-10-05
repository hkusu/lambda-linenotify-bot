var index = require('./index')

var event = {}
var context = {}
var callback = function (err, result) {
  if (err) {
    console.log(err.message)
  } else {
    console.log(result)
  }
}

index.handler(event, context, callback)
