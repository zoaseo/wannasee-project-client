import React from 'react';
import { Link } from 'react-router-dom'
import './period.css'

const PeriodPage = () => {
    return (
        <div class="Periodpage">
        <h1>기간별</h1>
        <div id="period_div">
            <ul id="period_ul">
                <li><Link to='/period'>전체보기</Link></li>
                <li><Link to='/period'>월간</Link></li>
                <li><Link to='/period'>주말</Link></li>
                {/* <li><Link to='/period'></Link></li> */}
            </ul>
        </div>
        </div>
    );
};

export default PeriodPage;