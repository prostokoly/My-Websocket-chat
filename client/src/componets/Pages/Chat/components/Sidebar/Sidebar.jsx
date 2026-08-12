import React from "react";
import styles from "./styles.module.css";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h4 className={styles.header}>USERS</h4>
            <ul className={styles.users}>
                <li>User1</li>
                <li>User2</li>
                <li>User3</li>
            </ul>
        </div>
    );
};

export default Sidebar;
