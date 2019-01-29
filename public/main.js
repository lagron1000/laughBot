// let checkLUL = setInterval(function(){LULCounter = 0}, 5000)

Pusher.logToConsole = true;

var pusher = new Pusher('bd3c6c36ae064635c676', {
    cluster: 'ap2',
    forceTLS: true
});
var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function (data) {
    console.log(data.dir)
    $(data.dir).get(0).play()
});
Twitch.init({ clientId: '0swf50e2k1wc7r4d10qqirz6g74n37' }, function (error, status) {
    if (error) { console.log(error) }
    if (status) {
        if (status.authenticated) {
            $('#login').hide()
            $('#logout').show()
            Twitch.api({ method: 'channel' }, function (error, channel) {
                $.ajax({
                    type : "POST",
                    url : "http://localhost:8080/endpoint",
                    data : channel,
                    dataType : 'application/json'
                });
                return;
            });
            $('#guide').hide();
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
    Twitch.logout(function (error, channel) {
        $.ajax({
            type : "POST",
            url : "http://localhost:8080/disconnect",
            data : channel,
            dataType : 'application/json'
        });
        location.reload();
        return;
    });
})


