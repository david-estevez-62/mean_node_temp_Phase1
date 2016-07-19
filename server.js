var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    meetupsController = require('./server/controllers/meetups-controller.js')

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.post('/api/meetups', meetupsController.create);


var server = app.listen(process.env.PORT || 3456, function () {
  console.log('Express server listening on port ' + server.address().port);
});