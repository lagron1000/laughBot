// var tmi = require('tmi.js')
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


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

app.post('/sisma', function (req, res) {
  res.send('oauth:5vhuaq4arzqv3woh3p4wfbgbjefnrf')
});

app.listen(process.env.PORT || '8080', () => {
    console.log("Server started on port 8080");
  });

