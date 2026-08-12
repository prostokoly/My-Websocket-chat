import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Body from "./components/Body/Body";
import MessageBlock from "./components/MessageBlock/MessageBlock";
import styles from "./styles.module.css";

const ChatPage = ({ socket }) => {
    return (
        <div className={styles.chat}>
            <Sidebar />
            <main className={styles.main}>
                <Body />
                <MessageBlock />
            </main>
        </div>
    );
};

export default ChatPage;
