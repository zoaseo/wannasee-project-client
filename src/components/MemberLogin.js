import React from 'react';
import './MemberLogin.css'


const MemberLogin = () => {
    return (
    <div id="memberLogin">
    <form>
        <table>
            <tbody>
                <tr>
                    <th colSpan={2}>
                        🔑 Login
                    </th>
                </tr>
                <tr>
                    <td>아이디</td>
                    <td>
                        <input type="text" name="userID"/>
                    </td>
                </tr>
                <tr>
                    <td>비밀번호</td>
                    <td>
                    <input type="password" name="userPW"/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} id="btns">
                        <button type="submit">로그인</button>
                        <button type="reset">취소</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
    </div>
    );
};

export default MemberLogin;