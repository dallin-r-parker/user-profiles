//================  dependencies  =========
var express = require('express');
var app = express();
var session = require('express-session')
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config.js');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');
var port = 3030;
var corsOptions = {
  orgin: 'http://localhost:3030'
}
//============ intialization of server
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(session({ secret: config.sessionSecret }));
app.use(express.static(__dirname + '/public'));
console.log(__dirname);

//============ end points
app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriends);




//======== listening port
app.listen(port, function() {
  console.log("You're on port: " + port);
})
// NOTE: Req = Request: coming from the browser is a Request
// NOTE: Res = Response: sending things back
// NOTE: PUT: UPDATE CONTENT
// NOTE: GET: REQUEST INFORMATION
// NOTE: POST: ADD NEW INFORMATION -- body can only be used on POST
