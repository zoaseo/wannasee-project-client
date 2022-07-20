import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import './Header.css';

const Header = () => {
    function go_up() {
        window.scrollTo(0,0);
    }
    return (
        <div id="header">
            <div id="top_header">
                <div className='inner'>
                    <div id="ticket_icon"><img src='/concert.png' alt="ticket"/></div>
                    <h1><Link to ='/'>WANNASEE?</Link></h1>
                    <ul>
                        <li><Link to="/insert">insert</Link></li>
                        <li><NavLink to="/login" className={({ isActive })=> (isActive? "orange": "")}>login</NavLink></li>
                        <li><Link to="/join">join</Link></li>
                        <li><Link to="/mypage">mypage</Link></li>
                    </ul>
                </div>
            </div>
            <nav>
                <ul id="category">
                    <li id="genre"><Link to ='/genre/all'>#장르별</Link></li>
                    <li id="region"><Link to ='/region'>#지역별</Link></li>
                    <li id="period"><Link to ='/period'>#기간별</Link></li>
                </ul>
                {/* <ul>
                    <li id="welcome"><Link to ='/'>Welcome</Link></li>
                </ul> */}
            </nav>
            <div id="Arrimg" onClick={go_up}><img src='/arrow.png' alt="arrow_pic" /></div>
        </div>
    );
};

export default Header;