const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;

const http = require("http");
const {Server} = require("socket.io");

var db = require('./database/database.js'); //database connection

// Connect to our database
db.connect((err) => {
  if(err) throw err;
});

//initialize app express
const app = express();

// This is to allow our api for cross-origin resource sharing
app.use(cors());

// allow api to parse JSON
app.use(express.json());

// allow api to receive data from client app
app.use(express.urlencoded({
  extended:true
}));

//register routes
app.use('/',[
  require('./routes/pH_sql'), //pH Level
  require('./routes/tds_sql'), // tds
]);

//test
app.get("/", (req, res) => {
  res.json("hello");
});

// WEBSOCKET.io
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5000",
    methods: ["GET", "POST", "DELETE"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected");
})

server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

// //initialte api
//   app.listen(port, () => {
//     console.log(`Listening at http://localhost:${port}`);
// });