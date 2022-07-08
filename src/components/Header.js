import React from 'react';

const Header = () => {
    return (
        <div id="header">
            <div id="top_header">
                <h1>WANNASEE?</h1>
                <ul>
                    <li>login</li>
                    <li>join</li>
                    <li>mypage</li>
                </ul>
            </div>
            <nav>
                <ul>
                    <li>
                        장르별
                        <ul>
                            <li>발라드</li>
                            <li>발라드</li>
                            <li>발라드</li>
                            <li>발라드</li>
                        </ul>
                    </li>
                    <li>지역별
                        <ul>
                            <li>서울</li>
                            <li>대학로</li>
                            <li>홍대</li>
                            <li>경기</li>
                        </ul>
                    </li>
                    <li>기간별
                        <ul>
                            <li>일간</li>
                            <li>월간</li>
                            <li>주간</li>
                            <li>주말</li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;