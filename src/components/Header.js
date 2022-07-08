import React from 'react';

const Header = () => {
    return (
        <div id="header">
            <nav>
                <ul>
                    <li>장르별</li>
                    <li>지역별</li>
                    <li>기간별</li>
                </ul>
            </nav>
            <div id="top_header">
                <ul>
                    <li>login</li>
                    <li>join</li>
                    <li>mypage</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;