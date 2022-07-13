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
    return (
            <li id="GenreContent">
                <span id="span_locaion">{concert.location}</span>
                <div><img src={concert.imgsrc} alt="singer_pic" /></div>
                <span>{concert.title}</span>
            </li>
    );
};

export default GenreComponent;