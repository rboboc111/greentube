var express = require('express')
var app = express()

var PORT   = process.env.PORT || 8080;


//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World')
})

//Launch listening server on port 8080
app.listen(PORT, function () {
  console.log('App listening on port ', PORT)
})


