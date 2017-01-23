//
// NODE is the server, allows for coding in JS on server-side - also provides library of JS modules
// EXPRESS framework for node - makes deploying your site easy


// Starts a server and listens on port 3000 for connections. Will respond with "hello world" for requests to the root route (/)
// Will respond with 404 not found on any other path... only responds to requests on port 3000 (/)

var express = require('express')
var app = express()


// for requests to root url, app responds with 'hello world'

// app.get('/', function (req, res) {
//   res.send("Hello World!")
// })


// SERVING STATIC FILES IN THE 'STATIC' directory
app.use(express.static('static'))


//listening for connections to port 3000
app.listen(3000, function() {
  console.log('Example app listening on port 3000')
});
