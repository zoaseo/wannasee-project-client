import AOS from 'aos';
import React, { useEffect } from 'react';
import './main.css';
import "./aos.css";

const MainPage = () => {
    useEffect(() => {
        AOS.init({
            duration : 2500
        });
    });
    return (
        <div id="mainpage" >
            <video loop autoPlay muted>
                <source src="bts.mp4" type="video/mp4"/>
            </video>
            <div id="second_content">
                <div id='wtw'>
                    <div id="wtwspan">
                        <span id="up_span">Welcome to</span><br/>
                        <span id="down_span">WANNASEE!<br/></span>
                    </div>
                    <div id="paragraph">
                        <span>Discover the unique atmosphere of our private<br/></span>
                        <span>residential club communities. Once experienced. Never<br/></span>
                        <span>forgotten. This is classic, comfortable, modern living in <br/></span>
                        <span>nature's most spectacular settings worldwide.<br/></span>
                        <span>Reassuringly exclusive. Generously welcoming. Find<br/></span>
                        <span>your unique world - a place where families love to be;<br/></span>
                        <span>creating unforgettable moments, together.</span>
                    </div>            
                </div>
                <div id='Cityimg' ><img src='/branch.png' alt="singer_pic" /></div>
                <div id='IUimg' data-aos="fade-up"><img src='/IU.jpg' alt="singer_pic" /></div>
                <div id='Twiceimg' data-aos="fade-up"><img src='/Twice.jpg' alt="singer_pic" /></div>
            </div>
            <div id="third_content"> 
                <div><img src='/arrow.png' alt="arrow_pic" /></div>
            </div>
        </div>
   
    );
};

export default MainPage;