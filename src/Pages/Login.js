import React from 'react';
import './Login.css'

class Login extends React.Component {
    login = async (event) => {
        event.preventDefault(); // 폼 기본 동작 방지

        const form = new FormData(event.target);
        const userID = form.get('userID');
        const userPW = form.get('userPW');

        // 서버로 전송될 데이터
        const data = {
            userID: userID,
            userPW: userPW
        };

        try {
            const response = await fetch('/DayBridge/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) // 데이터를 JSON 문자열로 변환해 전송함
            });

            // 로그인 성공 시 home.html로 이동
            if (response.ok) {
                // const user = await response.json(); // 응답 데이터 JSON으로 파싱
                console.log('로그인 성공: ', response);
                window.location.href = "/DayBridge/";
            }
            else {
                console.error('로그인 실패: ', response.statusText);
                alert('아이디 혹은 비밀번호를 다시 확인하세요.');
            }
        }
        catch (error) {
            console.error('로그인 중 에러:', error)
            alert('오류 발생');
        }
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1><a href="/DayBridge/">ROOMSTYLER</a></h1>
                    <div className="nav">
                        <ul>
                            <li><a href="/DayBridge/gallery">My Gallery</a></li>
                            <li><a href="/DayBridge/login">Login</a></li>
                            <li><a href="/DayBridge/signUp">SignUp</a></li>
                        </ul>
                    </div>
                </div>

                <div className="login-form">
                    <form onSubmit={this.login}>
                        <input type="text" name="userID" placeholder="아이디" required />
                        <input type="password" name="userPW" placeholder="비밀번호" required />
                        <input type="submit" value="로그인" href="/DayBridge/" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
