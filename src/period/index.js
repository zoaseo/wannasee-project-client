import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import useAsync from '../customHook/useAsync';
import PeriodComponent from './period';
import { API_URL } from '../config/contansts.js';

async function getConcerts(){
    const response = await axios.get(`${API_URL}/period`);
    return response.data;
}

const PeriodPage = () => {
    const [state] = useAsync(getConcerts, [])
    const { loading, data: concerts, error } = state;
    if(loading) 
    return <div className="spinner_bg"><div className="spinner"><div className="cube1"></div><div className="cube2"></div></div></div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!concerts) return <div>로딩중입니다.</div>
    return (
        <div className="Allpage">
            <h1>기간별</h1>
            <div className="pageinner">
                <div id="all_div">
                    <ul id="all_ul">
                        <li><Link to='/period'>전체보기</Link></li>
                        <li><Link to='/period'>월간</Link></li>
                        <li><Link to='/period'>주말</Link></li>
                    </ul>
                </div>
                <ul className='component'>
                    {concerts.map(concert=>(
                        <PeriodComponent  key={concert.id} concert={concert}/>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PeriodPage;