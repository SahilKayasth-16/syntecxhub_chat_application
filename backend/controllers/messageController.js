const Message = require("../models/Message");

//======== GET CHAT HISTORY OF A ROOM ========//
const getMessages = async (req, res) => {
    try {
        const { room } = req.params;

        const messages = await Message.find({ room }).sort({ createdAt: 1 });

        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

//======== POST NEW MESSAGE ========//
const saveMessages = async (req, res) => {
    try {
        const { username, room ,message } = req.body;
        
        const newMessage = await Message.create({
            username, 
            room,
            message
        });

        res.status(201).json(newMessage);
    } catch(error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = { getMessages, saveMessages };