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

var reg = /\b(lul|lol|ha)+\b/gi
var LULCounter = 0;

var client = new tmi.client(options);

client.on("chat", function (channel, userstate, message, self) {
    if (self) return;
    console.log(reg.test(message))
    console.log(reg.test(LULCounter))
    if (reg.test(message)) {
        LULCounter++;
    }
    if (LULCounter >= 2) {
        document.getElementById('player').play()
        client.say(channel, "hahahaha");
        LULCounter = 0
        // clearInterval(checkLUL)
    }
});

client.connect();