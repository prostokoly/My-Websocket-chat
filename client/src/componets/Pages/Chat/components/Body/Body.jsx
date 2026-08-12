import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Body = ({ messages }) => {
    const navigate = useNavigate();

    const getCurrentUser = () => {
        const rawUser = localStorage.getItem("user");
        if (!rawUser) return "";
        try {
            const parsed = JSON.parse(rawUser);
            return typeof parsed === "object" && parsed !== null
                ? parsed.name || parsed.username
                : parsed;
        } catch {
            return rawUser;
        }
    };

    const currentUser = getCurrentUser();

    const handleLeave = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <>
            <header className={styles.header}>
                <button className={styles.btn} onClick={handleLeave}>
                    Покинуть чат
                </button>
            </header>

            <div className={styles.container}>
                {messages.map((element, index) => {
                    const isMe = element.name === currentUser;

                    return (
                        <div
                            key={index}
                            className={`${styles.chats} ${isMe ? styles.myChats : styles.otherChats}`}
                        >
                            <p className={styles.senderName}>
                                {isMe ? "Вы" : element.name || "Без имени"}
                            </p>

                            <div
                                className={
                                    isMe
                                        ? styles.messageSender
                                        : styles.messageRecipient
                                }
                            >
                                <p>{element.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Body;
