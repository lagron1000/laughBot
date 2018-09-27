var tmi = require('tmi.js')
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Pusher = require('pusher');
var rules = require('./rules').rules

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var pusher = new Pusher({
  appId: '605640',
  key: 'bd3c6c36ae064635c676',
  secret: '35432209834fea2cb351',
  cluster: 'ap2',
  encrypted: true
});

app.post('/endpoint', function (req, res) {
    //remove debug option when done and maybe also reconnect
  var options = {
    options: {
      debug: true
    },
    connection: {
      cluster: "aws",
      reconnect: true
    },
    identity: {
      username: "LaughTrackBot",
      password: "oauth:5vhuaq4arzqv3woh3p4wfbgbjefnrf"
    },
    channels: [req.body.display_name]
  };
  var client = new tmi.client(options);

  client.on("chat", function (channel, userstate, message, self) {
    if (self) return;
    for (let i = 0; i < rules.length; i++) {
      // console.log(rules[i])
      if (rules[i].keyWords.test(message)) {
        console.log(rules[i].keyWords.test(message))
        console.log(rules[i].counter)
        rules[i].counter++;
        console.log(rules[i].counter)
        console.log(self)
      }
      if (rules[i].counter >= 2) {
        pusher.trigger('my-channel', 'my-event', {
          "dir": rules[i].responseDir
        });
        // rules[i].responseDir.play()
        client.say(channel, rules[i].responseText);
        rules[i].counter = 0
        // clearInterval(checkLUL)
      }
    }
  });
  client.connect();
});



app.listen(process.env.PORT || '8080', () => {
  console.log("Server started on port 8080");
});
