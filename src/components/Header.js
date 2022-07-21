import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './Header.css';
import axios from 'axios';
import { API_URL } from '../config/contansts';

const Header = () => {
    const [loginId, setLoginId] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [savedLoginId, setSavedLoginId] = useState("");
    const [savedLoginPassword, setSavedLoginPassword] = useState("");
    console.log(sessionStorage.getItem('loginId'))
    console.log(savedLoginId)
    const navigate = useNavigate();
    const Login = async () => {
        let userId = document.querySelector('#userID');
        let userPw = document.querySelector('#userPW');
        if(userId.value === "" || userPw.value === "") {
            alert("아이디와 비밀번호 모두 입력해주세요");
        } else {
            const response = await axios.get(`${API_URL}/getId/${userId.value}`);
            const getId = response.data;
            const response2 = await axios.get(`${API_URL}/getPw/${userId.value}`);
            const getPw = response2.data;

            if(getId.length <= 0) {
                alert("등록된 아이디가 없습니다.");
                // console.log(getId)
            } else {
                const getId2 = getId[0].userId;
                const getPw2 = getPw[0].password;
                // console.log(getPw2);
                // console.log(getId2);
                let userId_value = userId.value;
                let userPw_value = userPw.value;
                // console.log(userPw_value);
                if(userPw_value === getPw2) {
                    // console.log('good!');
                    // console.log(getId2);
                    sessionStorage.setItem("loginId", getId2);
                    sessionStorage.setItem("loginPassword", getPw2);
                    setSavedLoginId(sessionStorage.getItem("loginId"));
                    setSavedLoginPassword(sessionStorage.getItem("loginPassword"));
                    console.log(JSON.stringify(sessionStorage));
                    navigate('/');
                } else {
                    alert("비밀번호가 일치하지 않습니다.");
                }
            }
        }
    }
    console.log(savedLoginId);
    // console.log(loginId);
    const Logout = async () => {
        sessionStorage.clear();
        console.log(JSON.stringify(sessionStorage));
    }

    function go_up() {
        window.scrollTo(0,0);
    }
    return (
        <div id="header">
            <div id="top_header">
                <div className='inner'>
                    <div id="ticket_icon"><img src='/concert.png' alt="ticket"/></div>
                    <h1><Link to ='/'>WANNASEE?</Link></h1>
                    <ul>
                        <li><Link to="/insert">insert</Link></li>
                        <li onClick={Login}><Link to="/login">login</Link></li>
                        <li><Link to="/join">join</Link></li>
                        <li><Link to="/mypage">mypage</Link></li>
                    </ul>
                </div>
            </div>
            <nav>
                <ul id="category">
                    <li id="genre"><Link to ='/genre'>#장르별</Link></li>
                    <li id="region"><Link to ='/region'>#지역별</Link></li>
                    <li id="period"><Link to ='/period'>#기간별</Link></li>
                </ul>
                {/* <ul>
                    <li id="welcome"><Link to ='/'>Welcome</Link></li>
                </ul> */}
            </nav>
            <div id="Arrimg" onClick={go_up}><img src='/arrow.png' alt="arrow_pic" /></div>
        </div>
    );
};

export default Header;