import React from "react";
import "./style.css";

function Header (props) {
    return(
    <div className="jumbotron">
        <h1 className="display-3">Memory-Game</h1>
        <p className="lead">If you only click once on all pictures you win; anything else, you are done!</p>
        <hr className="my-2 line"/>
        <span className="score">{props.message}</span>
    </div>
    )
}

export default Header;