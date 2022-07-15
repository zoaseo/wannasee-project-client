import React from 'react';
import './genre.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import useAsync from '../customHook/useAsync';
import GenreComponent from './genre';
import { API_URL } from '../config/contansts.js';


async function getConcerts(){
    const response = await axios.get(`${API_URL}/genre`);
    return response.data;
}

const GenrePage = () => {
    const [state] = useAsync(getConcerts, [])
    const { loading, data: concerts, error } = state;
    if(loading) return <div>로딩중 ...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!concerts) return <div>로딩중입니다.</div>
    return (
        <div className="Genrepage">
            <h1>장르별</h1>
            <div className="pageinner">
                <div id="genre_div">
                    <ul id="genre_ul">
                        <li><Link to='/genre'>전체보기</Link></li>
                        <li><Link to="/genre/발라드">발라드</Link></li>
                        <li><Link to="/genre/트로트">트로트</Link></li>
                        <li><Link to="/genre/락메탈">락/메탈</Link></li>
                        <li><Link to="/genre/힙합">힙합</Link></li>
                    </ul>
                </div>    
                <ul className='component'>
                {concerts.map(concert=>(
                            <GenreComponent key={concert.id} concert={concert}/>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default GenrePage;