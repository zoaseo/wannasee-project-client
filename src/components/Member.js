// import React, { useState } from 'react';
// import { API_URL } from '../config/contansts';
// import './MemberJoin.css'
// import PopupDom from "./PopupDom"
// import PopupPostCode from "./PopupPostCode"
// import axios from 'axios';

// const MemberJoin = ({ onChange, onSubmit, addMember, onHome }) => {
//      // 우편번호 관리하기
//      const onAddData = (data) => {
//         const postAD = data.address;
//         onChange({
//             target: {
//                 name: 'add',
//                 value: postAD
//             }
//         })
//     }
//     // 팝업창 상태 관리
//     const [ isPopupOpen, setIsPopupOpen ] = useState(false);
//     // 팝업창 상태 true로 변경
//     const openPostCode = ()=> {
//         setIsPopupOpen(true);
//     }
//     // 팝업창 상태 false로 변경
//     const closePostCode = () => {
//         setIsPopupOpen(false);
//     }
//      // 폼 submit 이벤트
//      const onSubmitch = (e) => {
//         const userPw = document.querySelector('#password');
//         const userPwCh = document.querySelector('#passwordCk');
//         if(window.confirm("등록하시겠습니까?")){
//             e.preventDefault();
//             if(userPw.value !== userPwCh.value) {
//                 alert('비밀번호가 일치하지 않습니다.');
//             }else {
//                 if(isNaN(addMember.phone)){
//                     alert("전화번호는 숫자만 입력해주세요");
//                 }
//                 // input에 값이 있는지 체크하고
//                 // 입력이 다되어있으면 post전송
//                 else if(addMember.id !== "" && addMember.password !== "" &&
//                 addMember.name !== "" && addMember.phone !== "" &&
//                 addMember.email !== "" && addMember.add !== "" && 
//                 addMember.adddetail !== ""){
//                     onSubmit();
//                     onHome();
//                 }
//                 else {
//                     alert("모든 기입란에 기입해주세요");
//                 }
//             }
//         }else{
//             alert("등록이 취소되었습니다");
//         }
//     }

//     const OnPwCh = () => {
//         const userPw = document.querySelector('#password');
//         const userPwCh = document.querySelector('#passwordCk');
//         const passInform = document.querySelector('#passInform');
//         userPwCh.addEventListener('keyup',function(){
//             if(userPw.value !== userPwCh.value) {
//                 passInform.innerHTML = '비밀번호가 일치하지 않습니다.';
//                 console.log('비밀번호가 일치하지 않습니다.');
//             }else {
//                 passInform.innerHTML = '비밀번호가 일치합니다.';
//                 console.log('비밀번호가 일치합니다.');
//             }
//         })
//     }
//     const OnIdCh = async (e) => {
//         let userId = document.querySelector('#id');
//         const response = await axios.get(`${API_URL}/idCh`);
//         const Iddb = response.data;
//         let sameNum = 0;
//         Iddb.forEach( id => {
//             if(userId.value === id.userId){
//                 sameNum++;
//             }
//         });
//         if(sameNum !== 0) {
//             setFormData({
//                 ...formData,
//                 id: "",
//             })
//             alert('중복아이디입니다.');

//             console.log(userId)
//             console.log(userId.value)
//         }else {
//             alert('사용가능한 아이디입니다.');
//         }
//     }
//     return (
//         <div id="memberJoin">
//             <form onSubmit={onSubmitch}>
//                 <table>
//                     <tbody>
//                         <tr>
//                             <th colSpan={2}>
//                                 🎉 회원가입
//                             </th>
//                         </tr>
//                         <tr>
//                             <td>아이디</td>
//                             <td>
//                                 <input type="text" id="id" name="id" value={addMember.id} onChange={onChange} />
//                                 <span id ="duCk" onClick={(e)=>{OnIdCh(e);}}>👈 중복확인</span>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>비밀번호</td>
//                             <td>
//                             <input type="password" id="password" name="password" value={addMember.password} onChange={onChange}/>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>비밀번호 확인</td>
//                             <td>
//                             <input type="password"  id="passwordCk" name="passwordCk" value={addMember.passwordCk} onChange={(e)=>{onChange(e); OnPwCh(e);}}/>
//                             <span id="passInform"></span>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>이름</td>
//                             <td>
//                             <input type="text" name="name" value={addMember.name} onChange={onChange}/>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>전화번호</td>
//                             <td>
//                             <input type="text" name="phone" value={addMember.phone} onChange={onChange}/>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>이메일</td>
//                             <td>
//                             <input type="text" name="email" value={addMember.email} onChange={onChange}/>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>주소</td>
//                             <td>
//                                 <input name="add" type="text" value={addMember.add} onChange={onChange}/>
//                                 <input name="adddetail" type="text" value={addMember.adddetail} onChange={onChange}/>
//                                 <button type="button" onClick={openPostCode}>우편번호 검색</button>
//                                 <div id="popupDom">
//                                 {isPopupOpen && (
//                                     <PopupDom>
//                                         <PopupPostCode onClose={closePostCode}
//                                         onAddData={onAddData}
//                                         />
//                                     </PopupDom>
//                                 )}</div>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td colSpan={2} id="btns">
//                                <button type="submit">등록</button>
//                                <button type="reset">취소</button>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </form>

//         </div>
//     );
// };

// export default MemberJoin;