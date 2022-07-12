import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import useAsync from '../customHook/useAsync';
import './period.css'
import PeriodComponent from './period';
import { API_URL } from '../config/contansts.js';

async function getConcerts(){
    const response = await axios.get(`${API_URL}/period`);
    return response.data;
}

const PeriodPage = () => {
    const [state] = useAsync(getConcerts, [])
    const { loading, data: concerts, error } = state;
    if(loading) return <div>로딩중 ...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!concerts) return <div>로딩중입니다.</div>
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
        <div>
            {concerts.map(concert=>(
                        <PeriodComponent  key={concert.id} concert={concert}/>
                    ))}
            </div>
        </div>
    );
};

export default PeriodPage;