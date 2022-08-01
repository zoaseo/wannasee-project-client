import AOS from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import "../aos.css";
import Marquee from "react-fast-marquee";

const MainPage = () => {
    useEffect(() => {
        AOS.init({
            duration : 1500
        });
    });

    return (
        <div id="mainpage" >
            <video loop autoPlay muted>
                <source src="bts.mp4" type="video/mp4"/>
            </video>
            <Marquee speed={150} pauseOnHover gradient={false}>WANNASEE | WANNASEE는 올바른 공연문화를 지향합니다. 삶에 휴식 혹은 영감이 필요할 때, WANNASEE와 함께 떠나요! Discover the unique atmosphere of our private residential club communities. Once experienced. Never forgotten.</Marquee>
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
                <div id="third_slogan">Let's enjoy the concert</div>
                <div id="third_slogan2">WANNASEE와 콘서트를 즐길 준비 되셨나요?</div>
                <div id="swiftarrow"><img src='/swift.png' alt="singer_pic" /></div>
                    <div id="circle_slogan">
                        <img src='/circle.png' alt="singer_pic" />
                    </div>
                    <Link to ='/genre'><div id="playing"><span id="upspan">진행중인 콘서트</span><br/>보러가기</div></Link>
                <div id="WNNC"data-aos="fade-up"  data-aos-anchor-placement="top-bottom"><img src='/WNNC.png' alt="singer_pic" /></div>
            </div>
        </div>
   
    );
};

export default MainPage;