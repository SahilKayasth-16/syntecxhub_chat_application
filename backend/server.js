const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const http = require("http");
const { Server } = require("socket.io");

const connectDB = require("./config/db");
const messageRoutes = require("./routes/messageRoutes");
const socketHandler = require("./socket/socket");

dotenv.config();

connectDB();

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use("/api/messages", messageRoutes);

app.get("/", (req,res) => {
    res.send("Chat API is Running.");
});

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    },
});

socketHandler(io);

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
    console.log(`Server is running on port no. ${PORT}.`);
});