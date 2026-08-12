import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Body from "./components/Body/Body";
import MessageBlock from "./components/MessageBlock/MessageBlock";
import styles from "./styles.module.css";

const ChatPage = ({ socket }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on("response", (data) => {
            setMessages([...messages, data]);
        });
    }, [socket, messages]);
    return (
        <div className={styles.chat}>
            <Sidebar socket={socket} />
            <main className={styles.main}>
                <Body messages={messages} />
                <MessageBlock socket={socket} />
            </main>
        </div>
    );
};

export default ChatPage;
