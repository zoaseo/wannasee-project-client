import React from 'react';
import './genre.css'
import GenreTd  from './GenreTd';

const GenreComponent = ( {concert} ) => {

    return (
            <li>
                <img src={concert.imgsrc} alt="singer_pic" />
                <span>{concert.title}</span>
            </li>
    );
};

export default GenreComponent;