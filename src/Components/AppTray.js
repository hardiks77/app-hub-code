import React from "react";
import "./AppTray.css";

import calc from "../Images/calc4.PNG";
import tic from "../Images/tic1.PNG";
import todo from "../Images/todo3.PNG";



const images = [calc, todo, tic];



function AppTray(props) {

    

    return (
        <div className="app-tray font-style">
                 <img src={images[props.imgs - 1]}/>
            <h3>{props.name}</h3>
            <div className="btn-div">
                <a href={props.code} target="_blank"><button className="code-btn font-style">Code</button></a>
                <a href={props.apphost} target="_blank"><button className="app-btn font-style">App</button></a>
            </div>
        </div>
    )
}

export default AppTray;