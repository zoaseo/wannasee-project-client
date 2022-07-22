import React from 'react';
<<<<<<< HEAD
import './genre.css'
import { useParams, Link } from 'react-router-dom'
=======
import { Link } from 'react-router-dom'
>>>>>>> 6c0259e2317a81b1356b004454963d137c8601f8
import axios from 'axios';
import useAsync from '../customHook/useAsync';
import GenreComponent from './genre';
import { API_URL } from '../config/contansts.js';

async function getConcerts(){
    const response = await axios.get(`${API_URL}/genre`);
    return response.data;
}

const GenrePage = () => {
    const { ballad } = useParams();
    const [state] = useAsync(getConcerts, [])
    const { loading, data: concerts, error } = state;
    if(loading) 
    return <div className="spinner_bg"><div className="spinner"><div className="cube1"></div><div className="cube2"></div></div></div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!concerts) return <div>로딩중입니다.</div>
    return (
        <div className="Allpage">
            <h1>장르별</h1>
<<<<<<< HEAD
            <div id="genre_div">
                <ul id="genre_ul">
                    <li><Link to='/genre'>전체보기</Link></li>
                    <li><Link to={`/genre/${ballad}`}>발라드</Link></li>
                    <li><Link to='/genre/trot'>트로트</Link></li>
                    <li><Link to='/genre/rock'>락/메탈</Link></li>
                    <li><Link to='/genre/hiphop'>힙합</Link></li>
                </ul>
            </div>
            <ul className='component'>
            {concerts.map(concert=>(
                        <GenreComponent key={concert.genre} concert={concert}/>
                    ))}
            </ul>
=======
            <div className="pageinner">
                <div id="all_div">
                    <ul id="all_ul">
                        <li><Link to='/genre'>전체보기</Link></li>
                        <li><Link to="/genre/발라드">발라드</Link></li>
                        <li><Link to="/genre/트로트">트로트</Link></li>
                        <li><Link to="/genre/락메탈" >락/메탈</Link></li>
                        <li><Link to="/genre/힙합">힙합</Link></li>
                    </ul>
                </div>    
                <ul className='component'>
                {concerts.map(concert=>(
                            <GenreComponent key={concert.id} concert={concert}/>
                        ))}
                </ul>
            </div>
>>>>>>> 6c0259e2317a81b1356b004454963d137c8601f8
        </div>
    );
};

export default GenrePage;