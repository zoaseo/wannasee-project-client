import React from 'react';
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
    if(loading)
    return <div className="spinner_bg"><div className="spinner"><div className="cube1"></div><div className="cube2"></div></div></div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!concerts) return <div>로딩중입니다.</div>
    return (
        <div className="Allpage">
            <h1>지역별</h1>
            <div className="pageinner"></div>
                <div id="all_div">
                    <ul id="all_ul">
                        <li><Link to='/region'>전체보기</Link></li>
                        <li><Link to='/region'>서울</Link></li>
                        <li><Link to='/region'>인천</Link></li>
                        <li><Link to='/region'>대구</Link></li>
                    </ul>
                </div>
            <div>
            <ul className='component'>
            {concerts.map(concert=>(
                        <RegionComponent  key={concert.id} concert={concert}/>
                    ))}
            </ul>
        </div>
    </div>
    );
};

export default RegionPage;