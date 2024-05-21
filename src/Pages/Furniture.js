import React from 'react';
import './Furniture.css';

const Furniture = () => {
    const myGallery = (event) => {
        event.preventDefault();
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
                        <li><a href="/DayBridge/gallery" onClick={myGallery}>My Gallery</a></li>
                        <li><a href="/DayBridge/login">Login</a></li>
                        <li><a href="/DayBridge/signUp">SignUp</a></li>
                    </ul>
                </div>
            </div>
            <div className="sector">
                <div className="image-square" id="imageContainer">
                    {/* <img src={'data:image/jpg;base64,' + image} style={{ width: 'auto', maxHeight: '100%' }} alt="Main" /> */}
                </div>
                <div className="furniture-container">
                    <div className="furniture-square" id="furniture1">
                        {/* <img src={'data:image/jpg;base64,' + furniture1} style={{ width: 'auto', maxHeight: '100%' }} alt="Furniture 1" /> */}
                    </div>
                    <div className="furniture-square" id="furniture2">
                        {/* <img src={'data:image/jpg;base64,' + furniture2} style={{ width: 'auto', maxHeight: '100%' }} alt="Furniture 2" /> */}
                    </div>
                    <div className="furniture-square" id="furniture3">
                        {/* <img src={'data:image/jpg;base64,' + furniture3} style={{ width: 'auto', maxHeight: '100%' }} alt="Furniture 3" /> */}
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button onClick={() => window.location.href = '/DayBridge/gallery'}>목록보기</button>
            </div>
        </div>
    );
};

export default Furniture;
