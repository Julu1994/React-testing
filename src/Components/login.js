import React, { useContext } from "react";
import { globalData } from "./global";

function Login() {
    const newData = useContext(globalData);
    return <div>{newData}</div>;
}

export default Login;
