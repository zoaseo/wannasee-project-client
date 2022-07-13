import React from 'react';
import './genre.css'
import { Link } from 'react-router-dom';

const GenreComponent = ( {concert} ) => {
    return (
            <li id="GenreContent">
                <span id="span_locaion">{concert.location}</span>
                <Link to={`/detailview/${concert.id}`}>
                <div><img src={concert.imgsrc} alt="singer_pic" /></div>
                </Link>
                <span id="span_title">{concert.title}</span>
            </li>
    );
};

export default GenreComponent;