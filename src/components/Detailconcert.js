import React from 'react';
import axios from 'axios';
import useAsync from '../customHook/useAsync';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { API_URL } from '../config/contansts';

const Detailconcert = () => {
    async function getCustomers(id){
        const response = await axios.get(`${API_URL}/detailview/${id}`);
        return response.data;
    }  
    const { id } = useParams();
    const navigate = useNavigate();
    const [ state ] = useAsync(()=>getCustomers(id),[id]);
    const { loading, data:concert, error } = state;

    if(loading) return <div>로딩중.....</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!concert) return <div>로딩중입니다.</div>

    return (
        <div>
            <div>{concert.title}</div>
        </div>
    );
};

export default Detailconcert;