import React from "react";
import logo from "./picture/Logo.png";
import './nav.css';
import { Link } from "react-router-dom";

const Nav = ()=>{
    return(
        <div id="navmain">
            <img src={logo} alt="Logo" id="logo" />
            <div id="com">
                <ul>
                    <li>Home</li>
                    <li>Electronics</li>
                    <li>Grocery</li>
                    <li>AutoMobile</li>
                    <li>RealState</li>
                </ul>
            </div>
            <input type="search" name="" id="" />
            <Link to='/Register' id="sign">
                <form action="" method="get"id="signup">Sign Up</form>
            </Link>
        </div>

    )
}

export default Nav