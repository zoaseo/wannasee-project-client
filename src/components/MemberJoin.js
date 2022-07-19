import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/contansts';
import './MemberJoin.css'
import PopupDom from "./PopupDom"
import PopupPostCode from "./PopupPostCode"

const MemberJoin = () => {
    const navigate = useNavigate(); // 리다이렉션
     // 우편번호 관리하기
     const onAddData = (data) => {
        console.log(data);
        setFormData({
            ...formData,
            add: data.address,
        })
    }
    // 팝업창 상태 관리
    const [ isPopupOpen, setIsPopupOpen ] = useState(false);
    // 팝업창 상태 true로 변경
    const openPostCode = ()=> {
        setIsPopupOpen(true);
    }
    // 팝업창 상태 false로 변경
    const closePostCode = () => {
        setIsPopupOpen(false);
    }
    const [ formData, setFormData ] = useState({
        id: "",
        password: "",
        name: "",
        phone: "",
        email: "",
        add: "",
        adddetail: ""
    })
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
     // 폼 submit 이벤트
     const onSubmit = (e) => {
        if(window.confirm("등록하시겠습니까?")){
            e.preventDefault();
            if(isNaN(formData.phone)){
                alert("전화번호는 숫자만 입력해주세요");
                setFormData({
                    ...formData,
                    phone: "",
                })
            }
            // input에 값이 있는지 체크하고
            // 입력이 다되어있으면 post전송
            else if(formData.id !== "" && formData.password !== "" &&
            formData.name !== "" && formData.phone !== "" &&
            formData.email !== "" && formData.add !== "" && 
            formData.adddetail !== ""){
                insertMember();
            }
            else {
                alert("모든 기입란에 기입해주세요");
            }
        }else{
            alert("등록이 취소되었습니다");
        }
    }
    function insertMember(){
        axios.post(`${API_URL}/join`,formData)
        .then((result)=>{
            console.log(result);
            navigate("/"); // 리다이렉션 추가
        })
        .catch(e=>{
            console.log(e);
        })
    }
    return (
        <div id="memberJoin">
            <h1>회원가입</h1>
            <form onSubmit={onSubmit}>
                <div className='formItem'>
                    <span>아이디</span>	
                    <input type="text" name="id" value={formData.id} onChange={onChange}/>
                    <button>중복확인</button>
                </div>     
                <div className='formItem'>
                    <span>비밀번호</span>	
                    <input type="password" name="password" value={formData.password} onChange={onChange}/>
                </div>    
                <div className='formItem'>
                    <span>비밀번호 확인</span>	
                    <input type="password" name="passwordCk" value={formData.passwordCk} onChange={onChange}/>
                </div>     
                <div className='formItem'>
                    <span>이름</span>	
                    <input type="text" name="name" value={formData.name} onChange={onChange}/>
                </div>     
                <div className='formItem'>
                    <span>전화번호</span>	
                    <input type="text" name="phone" value={formData.phone} onChange={onChange}/>
                </div>
                <div className='formItem'>
                    <span>이메일</span>	
                    <input type="text" name="email" value={formData.email} onChange={onChange}/>
                </div>
                <div className='formItem'>  
                <input name="add" type="text"
                        value={formData.add}
                        onChange={onChange}/>
                        <input name="adddetail" type="text"
                        value={formData.adddetail}
                        onChange={onChange}/>
                        <button type="button" onClick={openPostCode}>우편번호 검색</button>
                        <div id="popupDom">
                            {isPopupOpen && (
                                <PopupDom>
                                    <PopupPostCode onClose={closePostCode}
                                    onAddData={onAddData}
                                    />
                                </PopupDom>
                            )}
                    </div>
                </div>
                <div>
                <button type="submit">등록</button>
                               <button type="reset">취소</button>
                </div>
            </form>
        </div>
    );
};

export default MemberJoin;