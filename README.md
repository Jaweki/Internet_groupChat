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

# Areas that require extensive Implementations
 1. The software may be advanced to enble media sharing.
 2. A quit/disconnect button may be included in the front-end. and also can a reconnect button.
 3. The software may be implemented too store data such as messages trasacted on a database (preferably MongoDB - its documnet           
     based database).
  4. More graphical features may be included in the front end to make it much beautiful.

# Explanatory screenshots
1. User is asked to enter a username to login
![Login-prompt](https://github.com/Jaweki/Internet_groupChat/assets/97351534/5a6360a6-4414-49ac-93c5-23f51ab2cfcd)

2. For ealier users, they receive a notification of the newly joining user
![user-join-notification](https://github.com/Jaweki/Internet_groupChat/assets/97351534/aeccfe48-c6dc-4caa-bb5f-d0a15d59c91d)

3. Sample message exchange in the group chat 
![chat-active_1](https://github.com/Jaweki/Internet_groupChat/assets/97351534/4a39e9aa-1d43-43f2-ac66-f6cd1f217b63)

4. Sample message exchange in the group chat
![chat-active_2](https://github.com/Jaweki/Internet_groupChat/assets/97351534/4e3948b1-902a-4203-be6f-eb734eb7e376)

5. For connected users, they receive notification of disconnected users.
![user-disconnect-notification](https://github.com/Jaweki/Internet_groupChat/assets/97351534/07abfbfd-49d0-4897-9c41-1a70183f5bfa)
