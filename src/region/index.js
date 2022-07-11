import React from 'react';
import './region.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import useAsync from '../customHook/useAsync';
import RegionComponent from './region';

const RegionPage = () => {
    return (
        <div class="Regionpage">
        <h1>지역별</h1>
        <div id="region_div">
            <ul id="region_ul">
                <li><Link to='/region'>전체보기</Link></li>
                <li><Link to='/region'>서울</Link></li>
                <li><Link to='/region'>인천</Link></li>
                <li><Link to='/region'>대구</Link></li>
            </ul>
        </div>
    </div>
    );
};

export default RegionPage;