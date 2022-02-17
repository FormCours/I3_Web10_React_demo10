import { nanoid } from "nanoid";
import { useState } from "react";
import MessageForm from "../../components/message-form/message-form";
import MessageList from "../../components/message-list/message-list";

const MessageContainer = () => {

    const [messages, setMessages] = useState([]);

    const handleNewMessage = (msg) => {
        // Création d'un objet avec le message et un id unique
        const newMsg = {
            msg: msg,
            id: nanoid()
        };

        // Ajout du message en 1er element
        setMessages(messages => [newMsg, ...messages]);
    }

    return (
        <main>
            <h1>Message...</h1>
            <MessageForm onSendMsg={handleNewMessage} />
            <MessageList incomingMessages={messages} />
        </main>
    )
}

export default MessageContainer;