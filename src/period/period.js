import React, { useEffect } from 'react';
import AOS from 'aos';
import "../aos.css";
import { Link } from 'react-router-dom';


const PeriodComponent = ({concert} ) => {
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    });
    return (
            <li className="AllContent" data-aos="fade-up" >
                <Link to={`/detailview/${concert.id}`}>
                    <span id="span_locaion">{concert.location}</span>
                    <div ><img src={`/${concert.imgsrc}`} alt="singer_pic" /></div>
                    <span className='span_title'>{concert.title}</span>
                    <div className='span_title' id="godetail">
                        <div id="small_detail">Show more</div>
                        <div id="small_ticket_icon"><img src='/concert.png' alt="ticket"/></div>
                    </div>
                </Link>
            </li>
    );
};

export default PeriodComponent;