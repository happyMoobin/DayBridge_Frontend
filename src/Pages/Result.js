import React from 'react';
import './Result.css';

const Result = () => {
    const saveImage = () => {
        const imageElement = document.getElementById('imageContainer').querySelector('img');
        const imageUrl = imageElement.src;
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'roomstyler_image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const myGallery = () => {
        let isLoggedIn = true;
        if (isLoggedIn) {
            window.location.href = "/DayBridge/gallery";
        } else {
            window.location.href = "/DayBridge/login";
        }
    };

    return (
        <div className="container">
            <div className="header">
                <h1><a href="/DayBridge/">ROOMSTYLER</a></h1>
                <div className="nav">
                    <ul>
                        <li><a href="/DayBridge/gallery" onClick={(e) => { e.preventDefault(); myGallery(); }}>My Gallery</a></li>
                        <li><a href="/DayBridge/login">Login</a></li>
                        <li><a href="/DayBridge/signUp">SignUp</a></li>
                    </ul>
                </div>
            </div>
            <div className="sector">
                <div className="image-square" id="imageContainer">
                    {/* <img src={'data:image/jpg;base64,' + {image}} style={{ width: 'auto', maxHeight: '100%' }} alt="Result" /> */}
                </div>
            </div>
            <div className="button-container">
                <button onClick={saveImage}>저장하기</button>
                <button onClick={() => window.location.href = '/DayBridge/form'}>다시 만들기</button>
                <button onClick={() => window.location.href = '/DayBridge/furniture'}>가구찾기</button>
            </div>
        </div>
    );
};

export default Result;
