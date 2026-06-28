import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Join() {
    const [ username, setUsername ] = useState('');
    const [ room, setRoom ] = useState("");

    const navigate = useNavigate();

    const handleJoin = (e) => {
        e.preventDefault();

        if (!username.trim() || !room.trim()) {
            alert("Enter Username and Room Name.");
            return;
        }

        navigate("/chat", {
            state: {
                username,
                room
            },
        });
    };
     return(
        <div className="join-page">
            <div className="join-card glass">
                <h1>Connectify - Real Time MERN Chat Application.</h1>

                <p>Join a room and start chatting.</p>

                <form onSubmit={handleJoin}>
                    <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="text" placeholder="Enter Room Name" value={room} onChange={(e) => setRoom(e.target.value)} />
                    <button type="submit" className="primary-btn">Join Chat</button>
                </form>
            </div>
        </div>
    );
}

export default Join;