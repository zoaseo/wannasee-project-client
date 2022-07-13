import React from 'react';
import './genre.css'
import { Link } from 'react-router-dom';

const GenreComponent = ( {concert} ) => {
    return (
            <li id="GenreContent">
                <Link to={`/detailview/${concert.id}`}>
                <span id="span_locaion">{concert.location}</span>
                <div><img src={`/${concert.imgsrc}`} alt="singer_pic" /></div>
                <span>{concert.title}</span>
                </Link>
            </li>
    );
};

export default GenreComponent;