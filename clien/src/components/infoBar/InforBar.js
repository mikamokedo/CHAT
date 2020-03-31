import React from 'react';
import './infoBar.css';
import onlineIcon from '../../icon/onlineIcon.png';
import closedIcon from '../../icon/closeIcon.png';
const InforBar = ({room}) =>{



    return(
        <div className="infoBar">
        <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="Fdsfds"/> 
    <h3>{room}</h3>
        </div>

        <div className="rightInnerContainer">
                <a href="/"><img src={closedIcon} alt="Fdsfds"></img></a>
        </div>
    </div>
    )
    


}

export default InforBar;

