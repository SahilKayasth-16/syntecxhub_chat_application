import React from "react";
import ChatBox from "../components/ChatBox";
import { useLocation } from "react-router-dom";

function Chat() {
    const location = useLocation();

    const {username, room } = location.state || {};
    return(
        <div className="chat-page">
             <ChatBox username={username} room={room} />
        </div>      
    );
}

export default Chat;