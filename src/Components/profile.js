import React, { useContext } from "react";
import { globalData } from "./global";
import "./profile.css";

function Profile() {
    const myData = useContext(globalData);
    return (
        <div className="profile">
            <h1>User Account</h1>
            <p>{myData}</p>
        </div>
    );
}
export default Profile;
