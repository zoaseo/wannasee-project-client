import React from 'react';

const GenreComponent = ( {concert} ) => {
    return (
        <div>
            <div>{concert.title}</div>
        </div>
    );
};

export default GenreComponent;