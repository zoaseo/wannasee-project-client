import React from 'react';
import './MyPage.css';

const MyPage = () => {
    return (
        <div id="Mypage">
        <form>
            <table>
                <tbody>
                    <tr>
                        <th colSpan={3}>
                            티켓 장바구니
                        </th>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>공연날짜</td>
                        <td>수량</td>
                    </tr>
                    <tr>
                        <td>힙합페스티벌</td>
                        <td>2022-07-19</td>
                        <td>2</td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
    );
};

export default MyPage;