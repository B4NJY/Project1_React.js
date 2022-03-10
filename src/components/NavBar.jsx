import React from "react";
import Logo from "../imgs/react-logo.png"

const NavBar = () => {
    return(
        <nav>
            <img src={Logo} alt="Logo react" className="nav--icon"/>
            <h3 className="nav--logo--txt">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}

export default NavBar;