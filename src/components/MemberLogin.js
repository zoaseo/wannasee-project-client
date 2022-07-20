import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MemberLogin.css'
import { API_URL } from '../config/contansts';
import { useNavigate, useParams } from 'react-router-dom';
import useAsync from '../customHook/useAsync';

const MemberLogin = () => { 
    const getPassword = async (e) => {
        const userId = e.target.value;
        console.log(userId);
        const response = await axios.get(`${API_URL}/getId/${userId}`);
        const getId = response.data[0];
        console.log(getId)
        return getId;
        // if(getId.length>0) {

        // }else {
        //     alert("등록하신 아이디가 존재하지 않습니다");
        // }
        // console.log(getId.length);

        // const response2 = await axios.get(`${API_URL}/getPassword/${userId}`);
        // const password = response2.data[0];
        // return password;
    }
    // const Login = () => {
    //     const dd = getPassword();
    //     console.log(dd);
    // }
    // Login();
    const { id } = useParams();
    const navigate = useNavigate();
    const [ state ] = useAsync(()=>getPassword(id),[id]);
    const { loading, data:pass, error } = state;
    // console.log(pass);

    let [loginId, setLoginId] = useState("");
    let [loginPassword, setLoginPassword] = useState("");
    let [savedLoginId, setSavedLoginId] = useState("");
    let [savedLoginPassword, setSavedLoginPassword] = useState("");

    let sessionStorage = window.sessionStorage;
    // let sessionStorage = window.localStorage;

    // console.log(JSON.stringify(sessionStorage))

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
                                {/* <input type="text" name="userID" onChange={(e)=>{
                                    setLoginId(e.target.value);
                                }}/> */}
                                <input type="text" name="userID" onChange={(e)=>{
                                    getPassword(e);
                                    setLoginId(e.target.value);
                                }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td>
                            <input type="password" name="userPW" onChange={(e) => {
                                setLoginPassword(e.target.value);
                            }}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} id="btns">
                               <button onClick={(e)=>{
                                sessionStorage.setItem("loginId", loginId);
                                sessionStorage.setItem("loginPassword", loginPassword);

                                setSavedLoginId(sessionStorage.getItem("loginId"));
                                setSavedLoginPassword(sessionStorage.getItem("loginPassword"));
                                
                               }}
                                type="submit">로그인</button>
                               <button type="reset">취소</button>
                            </td>
                            <td colSpan={2} id="btns">
                               <button onClick={()=>{
                                sessionStorage.clear();
                                setSavedLoginId(sessionStorage.getItem("loginId"));
                                setSavedLoginPassword(sessionStorage.getItem("loginPassword"));
                               }} type="submit">로그아웃</button>
                            </td>
                            <td colSpan={2} id="btns">
                               <button onClick={()=>{
                                sessionStorage.removeItem("loginId");
                                setSavedLoginId(sessionStorage.getItem("loginId"));
                               }} type="submit">로그인 삭제</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <div>
                {/* sessionStorage에 저장된 loginId는 {sessionStorage.savedLoginId} 이고 loginPassword는 {savedLoginPassword} 이다.  */}
            </div>
            <div>
                {/* { JSON.stringify(sessionStorage) } */}
            </div>
        </div>
    );
};

export default MemberLogin;