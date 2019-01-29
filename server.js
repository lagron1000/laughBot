var tmi = require('tmi.js')
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Pusher = require('pusher');
var rules = require('./rules').rules;
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

channelsArr = [];

var pusher = new Pusher({
  appId: '605640',
  key: 'bd3c6c36ae064635c676',
  secret: '35432209834fea2cb351',
  cluster: 'ap2',
  encrypted: true
});

app.post('/endpoint', function(req, res){
  channelsArr.push(req.body.display_name);
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
    for (let i = 0; i < rules.length; i++){
      if(rules[i].keyWords.test(message)){
        rules[i].counter++;
      }
      if(rules[i].counter >= 2){
        pusher.trigger('my-channel', 'my-event', {
          "dir": rules[i].responseDir
        });
        client.say(channel, rules[i].responseText);
        rules[i].counter = 0;
      }
    }
});
client.connect();
})


// app.post('/sisma', function (req, res) {
//   res.send('oauth:5vhuaq4arzqv3woh3p4wfbgbjefnrf')
// });
app.post('/disconnect', function(req, res){
  channelsArr.push(req.body.display_name);
  for (let i = 0; i < channelsArr.length; i++){
    if(channelsArr == req.body.display_name){
      channelsArr.splice(i, 1);
    }
  }
})

app.listen(process.env.PORT || '8080', () => {
  console.log("Server started on port 8080");
});

