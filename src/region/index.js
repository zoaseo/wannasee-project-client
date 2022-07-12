import React from 'react';
import './region.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import useAsync from '../customHook/useAsync';
import RegionComponent from './region';
import { API_URL } from '../config/contansts.js';

async function getConcerts(){
    const response = await axios.get(`${API_URL}/region`);
    return response.data;
}

const RegionPage = () => {
    const [state] = useAsync(getConcerts, [])
    const { loading, data: concerts, error } = state;
    if(loading) return <div>로딩중 ...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!concerts) return <div>로딩중입니다.</div>
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
        <div>
            {concerts.map(concert=>(
                        <RegionComponent  key={concert.id} concert={concert}/>
                    ))}
            </div>
    </div>
    );
};

export default RegionPage;