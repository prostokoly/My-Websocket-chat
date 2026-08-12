const express = require("express");
const app = express();

const PORT = 5000;
const http = require("http").Server(app);
const cors = require("cors");
const socketIO = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:5173",
    },
});

app.get("api", (req, res) => {
    res.json({
        message: "Я поднялся",
    });
});

const users = [];

socketIO.on("connection", (socket) => {
    console.log(`${socket.id} user connected`);

    socket.on("message", (data) => {
        socketIO.emit("response", data);
    });

    socket.on("newUser", (data) => {
        if (!users.some((u) => u.socketID === data.socketID)) {
            users.push(data);
        }
        socketIO.emit("responseNewUser", users);
    });

    socket.on("disconnect", () => {
        console.log(`${socket.id} user disconnected`);

        const index = users.findIndex((u) => u.socketID === socket.id);
        if (index !== -1) {
            users.splice(index, 1);
        }

        socketIO.emit("responseNewUser", users);
    });
});

http.listen(PORT, () => {
    console.log("Server работает");
});
