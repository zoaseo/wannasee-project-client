import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MemberLogin.css'
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/contansts';

const MemberLogin = () => {
    const [userID, setUserID] = useState("")
    const [userPW, setUserPwd] = useState("")
    const [loginStatus, setLoginStatus] = useState("");
    
    const submitLogin = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/loginProcess`,{
                SenduserID: userID,
                SenduserPwd: userPW, 
            })
            .then((response) =>{
              if(response.data.message){
                setLoginStatus(response.data.message);
              }else{
                setLoginStatus(response.data[0].user_id);
              }
            });
    };
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get(`${API_URL}/loginMember`).then((response) => {
        if(response.data.LoggedIn === true)
        {
            setLoginStatus(response.data.user_id)
        }
        console.log(response);
        });
    }, []);
    return (
    <div id="memberLogin">
    <form>
                <table>
                    <tbody>
                        <tr>
                            <th colSpan={2}>
                                로그인
                            </th>
                        </tr>
                        <tr>
                            <td>아이디</td>
                            <td>
                                <input type="text" name="userID" onChange={(e)=>{
                                    setUserID(e.target.value);
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td>
                            <input type="password" name="userPW" onChange={(e) => {
                setUserPwd(e.target.value);
            }}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} id="btns">
                               <button onClick={submitLogin} type="submit">로그인</button>
                               <button type="reset">취소</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <h1>{loginStatus}</h1>
        </div>
    );
};

export default MemberLogin;