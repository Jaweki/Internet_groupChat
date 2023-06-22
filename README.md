# Internet_groupChat
A web application that serves the purpose as an internet group chat system. has a frontend running in JS, CSS and HTML; the backend is a node.js code.

Features include:
 Front-end>>
   1. A messages log display, 800x300 px,
   2. Strategic message placement. Sender messages on the right most side of the log display, Received messages on the left most side of          the display
   3. A text area that adjusts, vertically
   4. Has an overflow-y of scroll.
   5. Horizontal overflow messages lines are broken into new line, that way all the message content is within the bounds of the log display.
   6. Sender messages and received messages have different colors.

Back-end>>
    1. Runs as a nodejs application
    2. A websocket server listener
    3. it is a stateful server. Keeps track of the connected clients and anounces the disconnected clients
    4. Receive and transmit data in Json format.
    5. Announces the joining and disconnect of a client.

#Areas that require Implementation
 1. The software may be advanced to enble media sharing.
 2. A quit/disconnect button may be included in the front-end. and also can a reconnect button.
 3. The software may be implemented too store data such as messages trasacted on a database (preferably MongoDB - its documnet           
     based database).
  4. More graphical features may be included in the front end to make it much beautiful.
