function Message({ message,currentUser }) {

    const isOwnMessage = message.username === currentUser;

    return (
        <div className={`message-wrapper ${isOwnMessage ? "own" : "other"}`}>
            <div className={`message ${isOwnMessage ? "own-message" : "glass"}`}>
                <div className="message-header">
                    <span className="message-username">{message.username}</span>

                    <span className="message-time">{new Date(message.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                    })}</span>
                </div>

                <p className="message-text">{message.message}</p>
            </div>
        </div>
    );
}

export default Message;