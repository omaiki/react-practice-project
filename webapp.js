// Starts a server and listens on port 3000 for connections. Will respond with "hello world" for requests to the root route (/)
// Will respond with 404 not found on any other path... only responds to requests on port 3000 (/)

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send("Hello World!")
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000')
})
//
// NODE is the server, allows for coding in JS on server-side - also provides library of JS modules
// EXPRESS framework for node - makes deploying your site easy
