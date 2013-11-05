var AWS = require('aws-sdk')
AWS.config.loadFromPath('./config.json')
var s3 = new AWS.S3({params:{Bucket:'constellational.com'}})

exports.get = function() {
  console.log("GET request to /api")
  arguments[arguments.length-1]('Up')
}
exports.post = function(id) {
  var requestBody = ''
  , params = {}
  , callback = arguments[arguments.length-1]
  this.request.on('data', function(data) {
    requestBody += data;
    if(requestBody.length > 1e7) callback("Type less")
  })
  this.request.on('end', function() {
    params = {Key:id, Body:requestBody, ContentType:'text/html'}
    s3.putObject(params, function(e){
      if (e) callback(e.message)
      else callback('constellational.com.s3.amazonaws.com/'+id+' saved')
    })
  })
}
