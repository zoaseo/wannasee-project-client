import React from 'react';
import axios from 'axios';
import useAsync from '../customHook/useAsync';
import { useParams } from 'react-router-dom';
import { API_URL } from '../config/contansts';
import './Detailconcert.css';
import { Link } from 'react-router-dom'


const Detailconcert = () => {
    async function getConcerts(id){
        const response = await axios.get(`${API_URL}/detailview/${id}`);
        return response.data;
    }  
    const { id } = useParams();
    const [ state ] = useAsync(()=>getConcerts(id),[id]);
    const { loading, data:concert, error } = state;

    if(loading) return <div>로딩중.....</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!concert) return <div>로딩중입니다.</div>

    return (
        <div id="detail_concert">
            <span id="span_locaion">{concert.location}</span>
            <div><img src={`../${concert.imgsrc}`} alt="singer_pic" /></div>
            <span id="span_title">{concert.title}</span>
            <div>{concert.singer}</div>
            <div>{concert.genre}</div>
            <div>{concert.price}</div>
            <div>{concert.date}</div>
            <div>{concert.desc}</div>
            <button><Link to={`/editConcert/${id}`}>수정</Link></button>
        </div>
    );
};

export default Detailconcert;