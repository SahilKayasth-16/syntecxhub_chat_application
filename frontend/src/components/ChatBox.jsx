import MessageList from "./MessageList";
import { useState, useEffect, useRef } from "react";
import socket from "../socket/socket";
import { getMessages } from "../services/messageService";

function ChatBox({ username, room }) {
    const [ message, setMessage ] = useState("");
    const [ messages, setMessages ] = useState([]);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }

    useEffect(() => {
        if (!username || !room) return;

        const initializeChat = async () => {
            const previousMessages = await getMessages(room);
            setMessages(previousMessages);
            socket.connect();
        }

        initializeChat();

        const handleConnect = () => {
            socket.emit("joinRoom", room);
            console.log(`Joined Room: ${room}.`);
        }; 
        
        const handleDisconnect = () => {
            console.log("Disconnected");
        };

        const handleReceiveMessage = (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        };

        socket.on("connect", handleConnect);
        socket.on("disconnect", handleDisconnect);
        socket.on("receiveMessage", handleReceiveMessage);

        return () => {
            socket.off("connected", handleConnect);
            socket.off("disconnect", handleDisconnect);
            socket.off("receiveMessage", handleReceiveMessage);


            if (socket.connected) {
                socket.disconnect();
                console.log("Socket disconnected.");
            }
        };
    }, [room, username]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = () => {
        if (!message.trim()) return;

        socket.emit("sendMessage", {
            username,
            room,
            message
        });
        setMessage("");
    }

    return (
        <div className="chat-box glass">
            <div className="chat-header">
                <h2>{room}</h2>
                <span>Welcome, {username}</span>

                <div className="status">
                    <span className="status-dot"></span>
                    Connected
                </div>
            </div>

            <MessageList messages={messages} currentUser={username} messagesEndRef={messagesEndRef} />

            <div className="chat-input-container">
                <input 
                    type="text" 
                    placeholder="Type a message..." 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSendMessage();
                        }
                    }} 
                />
                <button className="primary-btn" onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default ChatBox;