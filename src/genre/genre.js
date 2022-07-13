import React from 'react';
import './genre.css'
import { Link } from 'react-router-dom';

const GenreComponent = ( {concert} ) => {
    return (
            <li id="GenreContent">
                <Link to={`/detailview/${concert.id}`}>
                <span id="span_locaion">{concert.location}</span>
<<<<<<< HEAD
                <div><img src={`/${concert.imgsrc}`} alt="singer_pic" /></div>
                <span>{concert.title}</span>
=======
                <div><img src={concert.imgsrc} alt="singer_pic" /></div>
                <span id="span_title">{concert.title}</span>
>>>>>>> 4e93376d1fc93f159723a962e31fb2a60af7fb4e
                </Link>
            </li>
    );
};

export default GenreComponent;