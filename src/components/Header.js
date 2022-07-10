import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

const Header = () => {
    function onClick() {
       this.style.color="black";
    }
    
    return (
        <div id="header">
            <div id="top_header">
                <div className='inner'>
                    <div id="ticket_icon"><img src='concert.png' alt="ticket"/></div>
                    <h1>WANNASEE?</h1>
                    <ul>
                        <li>login</li>
                        <li>join</li>
                        <li>mypage</li>
                    </ul>
                </div>
            </div>
            <nav>
                    <ul>
                        <li onClick={onClick} id="genre">장르별</li>
                        <li onClick={onClick} id="region">지역별</li>
                        <li onClick={onClick} id="period">기간별</li>
                        <li onClick={onClick} id="welcome"><Link to ='/'>Welcome</Link></li>
                    </ul> 
            </nav>
        </div>
    );
};

export default Header;