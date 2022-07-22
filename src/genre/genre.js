<<<<<<< HEAD
import React from 'react';
import './genre.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useAsync from '../customHook/useAsync';
import { API_URL } from '../config/contansts';

async function getConcerts(genre) {
    const response = await axios.get(`${API_URL}/genre/${genre}`);
    return response.data;
}

const GenreComponent = ( ) => {
    const { genre } = useParams();
    const [state] = useAsync(()=>getConcerts(genre), [genre]);
    const { loading, data: concert, error} = state;
    if(loading) return <div>로딩중입니다...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!concert) return null;
=======
import React, { useEffect } from 'react';
import AOS from 'aos';
import "../aos.css";
import { Link } from 'react-router-dom';

const GenreComponent = ( {concert} ) => {
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    });
>>>>>>> 6c0259e2317a81b1356b004454963d137c8601f8
    return (
            <li className="AllContent" data-aos="fade-up" >
                <Link to={`/detailview/${concert.id}`}>
                    <span id="span_locaion">{concert.location}</span>
                    <div ><img src={`/${concert.imgsrc}`} alt="singer_pic" /></div>
                    <span className='span_title'>{concert.title}</span>
                    <div className='span_title' id="godetail">
                        <div id="small_detail">Show more</div>
                        <div id="small_ticket_icon"><img src='/concert.png' alt="ticket"/></div>
                    </div>
                </Link>
            </li>
    );
};

export default GenreComponent;