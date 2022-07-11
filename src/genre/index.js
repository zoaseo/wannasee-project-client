import React from 'react';
import './genre.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import useAsync from '../customHook/useAsync';
import GenreComponent from './genre';

const GenrePage = () => {
    return (
        <div class="Genrepage">
            <h1>장르별</h1>
            <div id="genre_div">
                <ul id="genre_ul">
                    <li><Link to='/genre'>전체보기</Link></li>
                    <li><Link to='/genre/ballad'>발라드</Link></li>
                    <li><Link to='/genre/trot'>트로트</Link></li>
                    <li><Link to='/genre/rock'>락/메탈</Link></li>
                    <li>힙합</li>
                </ul>
            </div>
        </div>
    );
};

export default GenrePage;