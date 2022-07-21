// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setInput, setSubmit, goToHome } from '../modules/customers';
// import { useNavigate } from 'react-router-dom';
// import Member from './Member';

// const MemberContainer = () => {
//     const addMember = useSelector(state=>state.members.addMember);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const onHome = () => {
//         dispatch(goToHome(navigate));
//     }
//     const onChange = (e) => {
//         dispatch(setInput(e));
//     }
//     const onSubmit = () => {
//         dispatch(setSubmit());
//     }
//     return (
//         <div>
//             <Member onHome={onHome} onChange={onChange} onSubmit={onSubmit} addMember={addMember}/>
//         </div>
//     );
// };

// export default MemberContainer;