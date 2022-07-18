import React from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import useAsync from '../customHook/useAsync';
import RegionComponent from './region';
import { API_URL } from '../config/contansts.js';

const ConcertRegion = () => {
    async function getConcerts(rank_location){
        const response = await axios.get(`${API_URL}/region/${rank_location}`);
        return response.data;
    }
    const { rank_location } = useParams();
    const [state] = useAsync(()=>getConcerts(rank_location), [rank_location])
    const { loading, data: concerts, error } = state;
    console.log(state);
    if(loading) return <div className="spinner_bg"><div className="spinner"><div className="cube1"></div><div className="cube2"></div></div></div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!concerts) return <div>로딩중입니다.</div>
    return (
    <div className="Regionpage">
        <h1>지역별</h1>
        <div id="region_div">
            <ul id="region_ul">
                <li><Link to='/region'>전체보기</Link></li>
                <li><Link to='/region/1'>서울</Link></li>
                <li><Link to='/region/2'>부산</Link></li>
                <li><Link to='/region/3'>대구</Link></li>
                <li><Link to='/region/4'>인천</Link></li>
                <li><Link to='/region/5'>광주</Link></li>
                <li><Link to='/region/6'>대전</Link></li>
                <li><Link to='/region/7'>울산</Link></li>
                <li><Link to='/region/8'>기타</Link></li>
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

export default ConcertRegion;