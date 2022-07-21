// import axios from 'axios';
// import { API_URL } from '../config/contansts';

// // 리덕스 액션타입, 초깃값, 액션생성함수, 리듀서
// const GET_MEMBERS = "GET_MEMBERS";
// const GET_MEMBERS_ERROR = "GET_MEMBERS_ERROR";
// const GET_MEMBERS_SUCCESS = "GET_MEMBERS_SUCCESS";
// const SET_INPUT = "SET_INPUT";
// const SET_RESET = "SET_RESET";

// // 초깃값 설정
// const initialState = {
//     members: {
//         loading: false,
//         data: null,
//         error: null
//     },
//     addMember: {
//         id: "",
//         password: "",
//         name: "",
//         phone: "",
//         email: "",
//         add: "",
//         adddetail: ""
//     }
// }

// // 액션생성함수
// export const setInput = (e) => {
//     const { name, value } = e.target;
//     return {
//         type: SET_INPUT,
//         name,
//         value
//     }
// }

// // 홈으로 이동 함수
// export const goToHome = (navigate) => {
//     navigate('/');
// }

// // thunk 함수를 사용해서 액션객체 디스패치하기
// export const getMembers = () => async dispatch => {
//     dispatch({type:GET_MEMBERS}) // 요청시작
//     try {
//         const response = await axios.get(`${API_URL}/${userId.value}`);
//         const members = response.data;
//         dispatch({type: GET_MEMBERS_SUCCESS, members});
//     }
//     catch(e) {
//         dispatch({type: GET_MEMBERS_ERROR, error:e});
//     }
// }

// export const setSubmit = () => async (dispatch, getState) => {
//     const formdata = getState().members.addMember;
//     try {
//         const response = await axios.post(`${API_URL}/join`, formdata);
        
//         dispatch({type: SET_RESET})
//     }
//     catch(e) {
//         dispatch({type: SET_RESET})
//     }
// }

// // 리듀서 만들기
// export default function members(state = initialState, action){
//     switch(action.type){
//         case GET_MEMBERS:
//             return {
//                 ...state,
//                 members: {
//                     loading: false,
//                     data: null,
//                     error: null
//                 }
//             }
//         case GET_MEMBERS_SUCCESS:
//             return {
//                 ...state,
//                 members: {
//                     loading: false,
//                     data: action.members,
//                     error: null
//                 }
//             }
//         case GET_MEMBERS_ERROR:
//             return {
//                 ...state,
//                 members: {
//                     loading: false,
//                     data: null,
//                     error: action.error
//                 }
//             }
//         case SET_INPUT:
//             return {
//                 ...state,
//                 addMember: {
//                     ...state.addMember,
//                     [action.name]: action.value
//                 }
//             }
//         case SET_RESET:
//             return {
//                 ...state,
//                 addMember: {
//                     ...state.addMember,
//                     id: "",
//                     password: "",
//                     name: "",
//                     phone: "",
//                     email: "",
//                     add: "",
//                     adddetail: ""
//                 }
//             }
//         default:
//             return state;
//     }
// }