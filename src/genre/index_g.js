import React from 'react';
import './genre.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import useAsync from '../customHook/useAsync';
import GenreComponent from './genre';
import { API_URL } from '../config/contansts.js';

const Concert_genre = () => {
    async function getConcerts(genre){
        const response = await axios.get(`${API_URL}/genre/${genre}`);
        return response.data;
    }
    const { genre } = useParams();
    const navigate = useNavigate();
    const [ state ] = useAsync(()=>getConcerts(genre),[genre]);
    const { loading, data:concerts, error } = state;
    if(loading) return <div>로딩중 ...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!concerts) return <div>로딩중입니다.</div>
    return (
        <div>
            <ul className='component'>
                {concerts.map(concert=>(
                    <GenreComponent key={concert.id} concert={concert}/>
                ))}
            </ul>
        </div>
    );
};

export default Concert_genre;