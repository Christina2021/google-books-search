const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes");

// Express App
const app = express();
const PORT = process.env.PORT || 3001;

// For socket.io to be used
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
      }
});

// Creates logger instance 
app.use(logger("dev"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Static assets (heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add routes
app.use(routes);

// Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

// Socket.io
io.on("connection", (socket) => {
    socket.on("bookSaved", (message) => {
        socket.broadcast.emit("bookSaved", message.message);
    });
});

// Server
server.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });