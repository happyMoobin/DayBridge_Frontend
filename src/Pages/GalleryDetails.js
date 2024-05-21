import React from 'react';
import './GalleryDetails.css';

const GalleryDetails = () => {
    const myGallery = () => {
        // 로그인 상태 확인 (임시로 true로 설정)
        const isLoggedIn = true; // (임시)로그인 상태를 확인하는 로직 필요

        if (isLoggedIn) {
            window.location.href = "/DayBridge/gallery";
        } else {
            window.location.href = "/DayBridge/login";
        }
    };

    return (
        <div className="container">
            <div className="header">
                <h1><a href="/DayBridge/home">ROOMSTYLER</a></h1>
                <div className="nav">
                    <ul>
                        <li><a href="/DayBridge/gallery" onClick={myGallery}>My Gallery</a></li>
                        <li><a href="/DayBridge/login">Login</a></li>
                        <li><a href="/DayBridge/signUp">SignUp</a></li>
                    </ul>
                </div>
            </div>
            <div className="sector">
                <div className="image-square" id="imageContainer">
                    {/* <img th:src="'data:image/jpg;base64,' + ${image}" style="width: auto; max-height: 100%" /> */}
                </div>
                <div className="furniture-square" id="furnitureContainer">
                    <div className="furniture-info">
                        <ul id="furnitureList"></ul>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button onClick={() => window.location.href = '/DayBridge/gallery'}>목록 보기</button>
            </div>
        </div>
    );
};

export default GalleryDetails;
