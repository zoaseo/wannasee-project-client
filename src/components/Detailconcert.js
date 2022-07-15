import React from 'react';
import axios from 'axios';
import useAsync from '../customHook/useAsync';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { API_URL } from '../config/contansts';
import './Detailconcert.css';
import CounterContainer from './CounterContainer';
import moment from 'moment';


const Detailconcert = () => {
    async function getConcerts(id){
        const response = await axios.get(`${API_URL}/detailview/${id}`);
        return response.data;
    }  
    const { id } = useParams();
    const navigate = useNavigate();
    const [ state ] = useAsync(()=>getConcerts(id),[id]);
    const { loading, data:concert, error } = state;
    
    // 콘서트 삭제
    const onDelete = () => {
        if(window.confirm("정말 삭제하시겠습니까?")){
            axios.delete(`${API_URL}/delConcert/${id}`)
            .then(result=>{
                console.log("삭제되었습니다.");
                navigate("/"); // 리다이렉션 추가
            })
            .catch(e=>{
                console.log(e);
            })
        }else{
            alert("삭제가 취소되었습니다");
        }

    }

    if(loading) return <div>로딩중.....</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!concert) return <div>로딩중입니다.</div>

    return (
        <div id="detail_concert">
            <span id="span_locaion">{concert.location}</span>
            <div><img src={`../${concert.imgsrc}`} alt="singer_pic" /></div>
            <span id="span_title">{concert.title}</span>
            <div>{concert.singer}</div>
            <div>{concert.genre}</div>
            <div>{concert.price}</div>
            <div>{concert.concertdate}</div>
            <div>{concert.start_time}</div>
            <div>{concert.end_time}</div>
            <div>{concert.description}</div>
            <CounterContainer/>
            <button><Link to={`/editConcert/${id}`}>수정</Link></button>
            <button onClick={onDelete}>삭제</button>
        </div>
    );
};

export default Detailconcert;