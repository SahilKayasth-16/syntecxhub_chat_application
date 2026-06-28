const Message = require("../models/Message");

const socketHandler = (io) => {
    io.on("connection", (socket) => {
        console.log(`User Connected: ${socket.id}`);

        //==== JOINING A CHAT ROOM ====//
        socket.on("joinRoom", (room) => {
            socket.join(room);

            console.log(`${socket.id} joined room: ${room}.`);
        });

        //==== RECEIVE AND BROADCAST MESSAGE ====//
        socket.on("sendMessage", async (data) => {
            try {
                const SavedMessage = await Message.create({
                    username: data.username,
                    room: data.room,
                    message: data.message
                });

                io.to(data.room).emit("receiveMessage", SavedMessage);
            } catch (error) {
                console.error(`Error in saving message: ${error.message}`);
            }
        });

        socket.on("disconnect", () => {
            console.log(`User Disconnected: ${socket.id}`);
        });
    });
};

module.exports = socketHandler;