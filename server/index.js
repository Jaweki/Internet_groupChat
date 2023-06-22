var server = require('ws').Server;
var s = new server({ port: 5001 });

function chatRoom(ws, message) {
    ws.send(JSON.stringify(message));
}

const clientArray = [];

s.on('connection', (ws) => {

    ws.personName = ''; // Initialize the person's name property

    clientArray.push(ws);

    ws.on('message', (message) => {
        const msg = JSON.parse(message);
        if (msg.type == 'name') {
            ws.personName = msg.value; // Set the person's name
            console.log(ws.personName + ' has joined');
            const connectionMsg = {
                name: ws.personName,
                data: '>>>>>>>>>Joined the chat!<<<<<<<<<'
            };
            clientArray.forEach((client) => {
                if (client !== ws) {
                    chatRoom(client, connectionMsg);
                }
            });
        }

        if (msg.type ==  'message') {

            clientArray.forEach((client) => {
                if (client != ws) {
                    const broadcastMsg = { 
                        name: ws.personName, 
                        data: msg.data
                    }
                    chatRoom(client, broadcastMsg);
                }
            });
        }
    });
    
    ws.on('close', () => {
        console.log(ws.personName + ' has disconnected from the chat');
        const index = clientArray.indexOf(ws);
        if (index !== -1) {
            clientArray.splice(index, 1);
        }

        const disconnectionMsg = {
            name: ws.personName,
            data: '>>>>>>>>>has disconnected<<<<<<<<<'
        };
        clientArray.forEach((client) => {
            if (client !== ws) {
                chatRoom(client, disconnectionMsg);
            }
        });
    });
});
