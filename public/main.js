var LULCounter = 0;
var reg = /\b(LUL|LuL|lol|LOL)\b/
// let checkLUL = setInterval(function(){LULCounter = 0}, 5000)
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
    channels: ["lagron1000"]
};

var client = new tmi.client(options);
client.on("chat", function (channel, userstate, message, self) {
    if (self) return;
    if (reg.test(message)) {
        LULCounter++;
        if (LULCounter >= 6) {
            client.say(channel, "hahahaha");
            LULCounter = 0
            document.getElementById('player').play()
            // clearInterval(checkLUL)
        }
    }
});
client.connect();
