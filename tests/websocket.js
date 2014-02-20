var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 23000});
wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('received: %s', message);
    });
});
