import Message from "./Message";

function MessageList({ messages, currentUser, messagesEndRef }) {

    
    return (
        <div className="message-list">
            {messages.map((msg) => (
                <Message key={msg._id} message={msg} currentUser={currentUser} />
            ))}

            <div ref={messagesEndRef}></div>
        </div>
    );
}

export default MessageList;