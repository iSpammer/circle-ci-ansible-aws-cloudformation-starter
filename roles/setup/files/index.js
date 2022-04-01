var http = require("http");
var servicer = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end("Hello Darkness my old friend\ni came to talk to you again\nbecause a vision saw me creeping\nleft it's seeds while i was sleeping\nand the vision that was planted in my brain\nstill remain\n Within the sound of silence....")
});
server.listen(3000);