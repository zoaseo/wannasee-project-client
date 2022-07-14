import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/contansts';

const Createconcert = () => {
    const navigate = useNavigate(); // 리다이렉션
    const [ formData, setFormData ] = useState({
        // c_imgsrc: "",
        c_title: "",
        c_singer: "",
        c_genre: "",
        c_location: "",
        c_price: "",
        c_date: "",
        c_start_time: "",
        c_end_time: "",
        c_desc: "",
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
        // form에 원래 연결된 이벤트를 제거
        e.preventDefault();
        // 가격이 숫자인지 체크
        if(isNaN(formData.c_price)){
            alert("가격은 숫자만 입력해주세요");
            setFormData({
                ...formData,
                c_price: "",
            })
        }
        // input에 값이 있는지 체크하고
        // 입력이 다되어있으면 post전송
        else if(formData.c_title !== ""){
            insertConcert();
        }
    }
    function insertConcert(){
        axios.post(`${API_URL}/addConcert`,formData)
        .then((result)=>{
            console.log(result);
            navigate("/"); // 리다이렉션 추가
        })
        .catch(e=>{
            console.log(e);
        })
    }
    return (
        <div id="detail_concert">
            <h2>고객 정보 수정하기</h2>
            <form onSubmit={onSubmit}> 

                {/* <input name="c_imgsrc" type="file" 
                value={formData.c_imgsrc}
                onChange={onChange}/> */}
        
                <input name="c_title" type="text" 
                value={formData.c_title}
                onChange={onChange}/>

                <input name="c_singer" type="text" 
                value={formData.c_singer}
                onChange={onChange}/>
            
                발라드<input name="c_genre" type="radio" 
                value="발라드"
                onChange={onChange}
                checked={formData.c_genre === "발라드" ? true : false}/>

                트로트<input name="c_genre" type="radio" 
                value="트로트"
                onChange={onChange}
                checked={formData.c_genre === "트로트" ? true : false}/>
            
                락/메탈<input name="c_genre" type="radio" 
                value="락/메탈"
                onChange={onChange}
                checked={formData.c_genre === "락/메탈" ? true : false}/>

                힙합<input name="c_genre" type="radio" 
                value="힙합"
                onChange={onChange}
                checked={formData.c_genre === "힙합" ? true : false}/>
            
                <input name="c_location" type="text" 
                value={formData.c_location}
                onChange={onChange}/>

                <input name="c_price" type="text" 
                value={formData.c_price}
                onChange={onChange}/>

                <input name="c_date" type="date" 
                value={formData.c_date}
                onChange={onChange}/>
            
                <input name="c_start_time" type="text" 
                value={formData.c_start_time}
                onChange={onChange}/>
                
                <input name="c_end_time" type="text" 
                value={formData.c_end_time}
                onChange={onChange}/>

                <input name="c_desc" type="text" 
                value={formData.c_desc}
                onChange={onChange}/>
            
                <button type="submit">등록</button>
                <button type="reset">취소</button>            
            </form>
        </div>
    );
};

export default Createconcert;