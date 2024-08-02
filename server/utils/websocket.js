const { WebSocketServer } = require("ws");
const { getData } = require("../lib/salesData");

let wss;

function setupWebSocket(server) {
  wss = new WebSocketServer({ server });

  wss.on("connection", (ws) => {
    ws.send(JSON.stringify({ data: getData() }));
  });
}

//broadcast data updates to all clients
function broadcastData() {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify({ data: getData() }));
  });
}

module.exports = { setupWebSocket, broadcastData };
