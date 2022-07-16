import React from "react";
import { useSelector } from "react-redux";

import "./header.css";

function Header() {
    const counter = useSelector((state) => state.counter);
    return <div>{counter}</div>;
}
export default Header;
