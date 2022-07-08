import React from 'react';

const MainPage = () => {
    return (
        <div>
            <h2>Welcome</h2>
            <h1>WANNASEE?</h1>
            <video loop autoPlay muted>
                <source src="bts.mp4" type="video/mp4"/>
            </video>
        </div>
    );
};

export default MainPage;