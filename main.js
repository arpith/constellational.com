require('fsjs')(8000,'id')
var fs = require('fs')
, html = fs.readFileSync('index.html',{encoding:'UTF-8'})
exports.get = function() {
  var callback = arguments[arguments.length-1]
  if (!this.id) callback(html)
  else callback(html)
}
