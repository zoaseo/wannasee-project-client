import React from 'react';

const GenreTd = ({concert}) => {
    return (
        <div>
            <img src={concert.imgsrc} alt="singer_pic" />
            <span>{concert.title}</span>
            <span>{concert.singer}</span>
        </div>
    );
};

export default GenreTd;