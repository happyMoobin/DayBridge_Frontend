import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
    const [userID, setUserID] = useState('');
    const [userPW, setUserPW] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [email, setEmail] = useState('');
    const [nickName, setNickName] = useState('');
    const [name, setName] = useState('');

    const handleSignUp = async (event) => {
        event.preventDefault();

        if (userPW !== pwCheck) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        const userData = {
            userID: userID,
            userPW: userPW,
            nickName: nickName,
            email: email,
            name: name
        };

        try {
            const response = await fetch('/DayBridge/signUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // 요청의 Content-Type을 JSON으로 지정
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                // 회원가입 성공 시 수행할 작업
                console.log('회원가입 성공!');
                window.location.href = "/DayBridge/";
            } else if(userPW != pwCheck) {
                console.error('비밀번호가 틀립니다.');
                alert('비밀번호 오류로 회원가입에 실패했습니다.')
            } else {
                // 회원가입 실패 시 수행할 작업
                console.error('회원가입 실패:', response.statusText);
                alert('회원가입에 실패했습니다. 다시 시도해주세요.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('회원가입 중 오류가 발생했습니다.');
        }
    };

    const handleIDCheck = async () => {
        if (!userID) {
            alert('아이디를 입력해주세요.');
            return;
        }
        try {
            const response = await fetch(`/DayBridge/userID/${userID}/exists`);
            const data = await response.json();
            if (data) {
                alert('이미 존재하는 아이디입니다.');
            } else {
                alert('사용 가능한 아이디입니다.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('중복 검사 중 오류가 발생했습니다.');
        }
    };

    const handleNickNameCheck = async () => {
        if (!nickName) {
            alert('닉네임을 입력해주세요.');
            return;
        }
        try {
            const response = await fetch(`/DayBridge/nickName/${nickName}/exists`);
            const data = await response.json();
            if (data) {
                alert('이미 존재하는 닉네임입니다.');
            } else {
                alert('사용 가능한 닉네임입니다.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('중복 검사 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className="container">
            <div className="header">
                <h1><a href="/DayBridge/">ROOMSTYLER</a></h1>
                <div className="nav">
                    <ul>
                        <li><a href="/DayBridge/gallery" onClick={myGallery}>My Gallery</a></li>
                        <li><a href="/DayBridge/login">Login</a></li>
                        <li><a href="/DayBridge/signUp">SignUp</a></li>
                    </ul>
                </div>
            </div>
            <div className="sector">
                <form onSubmit={handleSignUp}>
                    <div className="inner-container">
                        <b className="name">아이디</b>
                        <input className="text" type="text" name="userID" placeholder="아이디 입력" value={userID} onChange={(e) => setUserID(e.target.value)} />
                        <input className="check-button" type="button" name="userIDcheck" value="중복확인" onClick={handleIDCheck} />
                    </div>
                    <div className="inner-container">
                        <b className="name">비밀번호</b>
                        <input className="text" type="password" name="userPW" placeholder="비밀번호 입력" value={userPW} onChange={(e) => setUserPW(e.target.value)} />
                    </div>
                    <div className="inner-container">
                        <b className="name">비밀번호 확인</b>
                        <input className="text" type="password" name="pwCheck" placeholder="비밀번호 입력" value={pwCheck} onChange={(e) => setPwCheck(e.target.value)} />
                    </div>
                    <div className="inner-container">
                        <b className="name">이메일</b>
                        <input className="text" type="email" name="userEmail" placeholder="Email 입력" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="inner-container">
                        <b className="name">닉네임</b>
                        <input className="text" type="text" name="nickName" placeholder="닉네임 입력" value={nickName} onChange={(e) => setNickName(e.target.value)} />
                        <input className="check-button" type="button" name="nickNamecheck" value="중복확인" onClick={handleNickNameCheck} />
                    </div>
                    <div className="inner-container">
                        <b className="name">이름</b>
                        <input className="text" type="text" name="userName" placeholder="이름 입력" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <button className="sign_up" type="submit" href="/DayBridge/">회원가입</button>
                </form>
            </div>
        </div>
    );
};

const myGallery = () => {
    // 로그인 상태 확인 (임시로 true로 설정)
    let isLoggedIn = true; // (임시)로그인 상태를 확인하는 로직 필요
    if (isLoggedIn) {
        window.location.href = "/DayBridge/gallery";
    } else {
        window.location.href = "/DayBridge/login";
    }
};

export default SignUp;
