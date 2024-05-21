import React from 'react';
import './Form.css';

const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        // formData 객체에 담긴 데이터를 사용하여 fetch 요청을 보냅니다.
        fetch('/DayBridge/form', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                // 응답을 처리합니다. 이 부분은 필요에 따라 수정할 수 있습니다.
                if(response.ok) {
                    window.location.href = "/DayBridge/result"; // 이미지 생성 완료 후 결과 페이지로 이동
                } else {
                    throw new Error('이미지 생성에 실패했습니다.');
                }
            })
            .catch(error => {
                console.error('이미지 생성 중 에러:', error);
                alert('이미지 생성 중 에러가 발생했습니다.');
            });
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
                <form onSubmit={handleSubmit}>
                    <div className="inner-container">
                        <b className="name">필수로 포함되어야 하는 가구</b><br />
                        <div className="options">
                            <label><input type="checkbox" name="essentialFurniture" value="Desk" /> 책상</label>
                            <label><input type="checkbox" name="essentialFurniture" value="Chair" /> 의자</label>
                            <label><input type="checkbox" name="essentialFurniture" value="Sofa" /> 소파</label>
                            <label><input type="checkbox" name="essentialFurniture" value="Bed" /> 침대</label>
                            <label><input type="checkbox" name="essentialFurniture" value="Wardrobe" /> 옷장</label>
                        </div>
                    </div>
                    <div className="inner-container">
                        <b className="name">창문 위치</b><br />
                        <div className="options">
                            <label><input type="checkbox" name="windowPosition" value="Front" /> 정면</label>
                            <label><input type="checkbox" name="windowPosition" value="Right" /> 오른쪽</label>
                            <label><input type="checkbox" name="windowPosition" value="Left" /> 왼쪽</label>
                        </div>
                    </div>
                    <div className="inner-container">
                        <b className="name">창문 개수</b><br />
                        <select name="windowNum" className="text">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="inner-container">
                        <b className="name">원하는 인테리어 톤/포인트 색상</b><br />
                        <div className="options">
                            <label><input type="checkbox" name="pointColor" value="white" /> 화이트</label>
                            <label><input type="checkbox" name="pointColor" value="black" /> 블랙</label>
                            <label><input type="checkbox" name="pointColor" value="green" /> 그린</label>
                            <label><input type="checkbox" name="pointColor" value="blue" /> 블루</label>
                            <label><input type="checkbox" name="pointColor" value="yellow" /> 옐로우</label>
                            <label><input type="checkbox" name="pointColor" value="purple" /> 퍼플</label>
                            <label><input type="checkbox" name="pointColor" value="wood" /> 우드</label>
                        </div>
                    </div>
                    <div className="inner-container">
                        <b className="name">방 크기 (평방미터)</b><br />
                        <select name="roomSize" className="text">
                            {[...Array(10).keys()].map((size) => (
                                <option key={size + 1} value={size + 1}>{size + 1}</option>
                            ))}
                        </select>
                    </div>
                    <button className="generate_image" type="submit" href="/DayBridge/result">이미지 생성</button>
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

export default Form;
