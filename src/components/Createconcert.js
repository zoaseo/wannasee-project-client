import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/contansts';
import './Createconcert.css'

const Createconcert = () => {
    const navigate = useNavigate(); // 리다이렉션
    const [ formData, setFormData ] = useState({
        c_imgsrc: "",
        c_title: "",
        c_singer: "",
        c_genre: "",
        c_location: "",
        c_price: "",
        c_concertdate: "",
        c_start_time: "",
        c_end_time: "",
        c_description: "",
        c_concert_place: "",
    })
    const onChangeImg = (e) => {
        const file = e.target.files[0];
        const imgsrc = "image/"+file.name;
        setFormData({
            ...formData,
            c_imgsrc: imgsrc
        })
    }
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    // 폼 submit 이벤트
    const onSubmit = (e) => {
        if(window.confirm("등록하시겠습니까?")){
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
            else if(formData.c_title !== "" && formData.c_singer !== "" &&
            formData.c_genre !== "" && formData.c_location !== "" &&
            formData.c_price !== "" && formData.c_concertdate !== "" && 
            formData.c_start_time !== "" && formData.c_end_time !== "" &&
            formData.c_description !== "" && formData.c_concert_place !== ""){
                insertConcert();
            }
            else {
                alert("모든 기입란에 기입해주세요");
            }
        }else{
            alert("등록이 취소되었습니다");
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
        <div id="create_concert">
            <form onSubmit={onSubmit}> 
            <table>
                <tbody>
                        <tr>
                            <th colSpan={2}>
                                공연 정보 등록하기
                            </th>
                        </tr>
                        <tr>
                            <td>이미지등록</td>
                            <td id='imgimgimg'>
                                <input name="c_imgsrc" type="file" onChange={onChangeImg}/>
                            </td>
                        </tr>
                        <tr>
                            <td>장르선택</td>
                            <td>
                                <span className='radios'>
                                발라드
                                <input name="c_genre" type="radio" value="발라드" onChange={onChange}
                                checked={formData.c_genre === "발라드" ? true : false}/>
                                </span>
                                <span className='radios'>
                                트로트
                                <input name="c_genre" type="radio" value="트로트" onChange={onChange}
                                checked={formData.c_genre === "트로트" ? true : false}/>
                                </span>
                                <span className='radios'>
                                락/메탈
                                <input name="c_genre" type="radio" value="락/메탈" onChange={onChange}
                                checked={formData.c_genre === "락/메탈" ? true : false}/>
                                </span>
                                <span className='radios'>
                                힙합
                                <input name="c_genre" type="radio" value="힙합" onChange={onChange}
                                checked={formData.c_genre === "힙합" ? true : false}/>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>타이틀</td>
                            <td>
                                <input name="c_title" type="text" value={formData.c_title} onChange={onChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>가수</td>
                            <td>
                                <input name="c_singer" type="text" value={formData.c_singer} onChange={onChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>지역</td>
                            <td>
                                <input name="c_location" type="text" value={formData.c_location} onChange={onChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>장소</td>
                            <td>
                                <input name="c_concert_place" type="text" value={formData.c_concert_place} onChange={onChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>가격</td>
                            <td>
                                <input name="c_price" type="text" value={formData.c_price} onChange={onChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>날짜</td>
                            <td>
                            <input name="c_concertdate" type="date" value={formData.c_concertdate} onChange={onChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>시작시간</td>
                            <td>
                            <input name="c_start_time" type="text" value={formData.c_start_time} onChange={onChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>종료시간</td>
                            <td>
                                <input name="c_end_time" type="text" value={formData.c_end_time} onChange={onChange}/>
                            </td>
                        </tr>
                        <tr id="con_desc">
                            <td>공연내용</td>
                            <td>
                                <textarea name="c_description" type="text" onChange={onChange} value={formData.c_description}></textarea>
                            </td>
                        </tr>
                        <tr id="btntr">
                            <td colSpan={2} id="btns">
                               <button type="submit">등록</button>
                               <button type="reset">취소</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default Createconcert;