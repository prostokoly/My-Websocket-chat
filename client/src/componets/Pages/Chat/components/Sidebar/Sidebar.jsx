import React, { use, useEffect, useState } from "react";
import styles from "./styles.module.css";

const Sidebar = ({ socket }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const handleResponseNewUser = (data) => {
            setUsers([data]);
        };
        socket.on("responseNewUser", handleResponseNewUser);
        return () => {
            socket.off("responseNewUser", handleResponseNewUser);
        };
    }, [socket]);
    return (
        <div className={styles.sidebar}>
            <h4 className={styles.header}>USERS</h4>
            <ul className={styles.users}>
                {users.map((item) => (
                    <li key={item.socketID}>{item.user}</li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
