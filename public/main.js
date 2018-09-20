var socket = io();
// var audio = new Audio('assets\laugh\laugh.mp3');
// var laughBtn = document.getElementById("laugh1"); 
// const laf = () => {
//     audio.play();
// }
// console.log(audio)
// laughBtn.onclick = laf
$('#laugh1').click(()=>{
    socket.emit('ding', 'la')
    return false;
})

socket.on('ding', ()=>{
    console.log('test2')
})

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
