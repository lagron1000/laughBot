// let checkLUL = setInterval(function(){LULCounter = 0}, 5000)
var reg = /\b(lul|lol|ha)+\b/gi
var LULCounter = 0;
Twitch.init({ clientId: '0swf50e2k1wc7r4d10qqirz6g74n37' }, function (error, status) {
    if (error) { console.log(error) }
    if (status) {
        if (status.authenticated) {
            $('#login').hide()
            $('#logout').show()
            Twitch.api({ method: 'channel' }, function (error, channel) {
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
                    channels: [channel.display_name]
                };
                var client = new tmi.client(options);
                client.on("chat", function (channel, userstate, message, self) {
                    if (self) return;
                    if (reg.test(message)) {
                        console.log(reg.test(message))
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
            });

            $('#main').show();
        } else if (!status.authenticated) {
            $('#logout').hide();
            $('#login').show()
        }
    }
});
$('#login').click(function () {
    Twitch.login({
        scope: ['user_read', 'channel_read']
    });
})

$('#logout').click(function () {
    Twitch.logout(function (error) {
        location.reload();
    });
})


