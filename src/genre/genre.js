import React from 'react';
import './genre.css'

const GenreComponent = ( {concert} ) => {
    return (
            <li id="GenreContent">
                <span id="span_locaion">{concert.location}</span>
                <div><img src={concert.imgsrc} alt="singer_pic" /></div>
                <span>{concert.title}</span>
            </li>
    );
};

export default GenreComponent;