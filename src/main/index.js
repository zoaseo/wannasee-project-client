import React from 'react';
import './main.css';

const MainPage = () => {
    
    return (
        <div id="mainpage">
            <video loop autoPlay muted>
                <source src="bts.mp4" type="video/mp4"/>
            </video>
        </div>
    );
};

export default MainPage;