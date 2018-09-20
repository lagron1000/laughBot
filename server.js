// var tmi = require('tmi.js')
var express = require('express');
var bodyParser = require('body-parser');
// var app = express();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
var app = express();
// var server = app.listen(8080);
// var io = require('socket.io').listen(server);

// var LULCounter = 0;
// var options = {
//     options: {
//         debug: true
//     },
//     connection: {
//         cluster: "aws",
//         reconnect: true
//     },
//     identity: {
//         username: "LaughTrackBot",
//         password: "oauth:5vhuaq4arzqv3woh3p4wfbgbjefnrf"
//     },
//     channels: ["lagron1000"]
// };

// var client = new tmi.client(options);
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());

// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
//   });


// io.on('connection', function (socket) {
//     console.log('a user connected');
//     socket.on('ding', function (msg) {
//         console.log(msg)
//         io.emit('ding', msg);
//         // socket.broadcast.emit('hi');
//     });
//     socket.on('disconnect', function () {
//         console.log('user disconnected');
//     });
// });



// client.on("chat", function (channel, userstate, message, self) {
//     if (self) return;
//     if (message == "LUL") {
//         LULCounter++;
//         if (LULCounter >= 3) {
//             client.say(channel, "hahahaha");
//             LULCounter = 0
//         }
//     }
// });


// client.connect();
app.listen(process.env.PORT || '8080', () => {
    console.log("Server started on port 8080");
  });

