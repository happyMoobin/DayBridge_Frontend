import React from 'react';
import "./Gallery.css"

const Gallery = () => {
    const handleSquareClick = (imageUrl) => {
        // 선택된 이미지 정보를 sessionStorage에 저장
        sessionStorage.setItem('selectedImage', imageUrl);

        // galleryDetails 페이지로 이동
        window.location.href = 'galleryDetails';
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
                <div className="gallery-container">
                    <section className="gallery" id="gallery">
                        <div className="gallery-row">
                            <div className="gallery-square" id="galleryContainer1" onClick={() => handleSquareClick("your-image.jpg")}>
                                {/* <img src="your-image.jpg"> */}
                            </div>
                            <div className="gallery-square" id="galleryContainer2" onClick={() => handleSquareClick("your-image.jpg")}>
                                {/* <img src="your-image.jpg"> */}
                            </div>
                            <div className="gallery-square" id="galleryContainer3" onClick={() => handleSquareClick("your-image.jpg")}>
                                {/* <img src="your-image.jpg"> */}
                            </div>
                        </div>
                        <div className="gallery-row">
                            <div className="gallery-square" id="galleryContainer4" onClick={() => handleSquareClick("your-image.jpg")}>
                                {/* <img src="your-image.jpg"> */}
                            </div>
                            <div className="gallery-square" id="galleryContainer5" onClick={() => handleSquareClick("your-image.jpg")}>
                                {/* <img src="your-image.jpg"> */}
                            </div>
                            <div className="gallery-square" id="galleryContainer6" onClick={() => handleSquareClick("your-image.jpg")}>
                                {/* <img src="your-image.jpg"> */}
                            </div>
                        </div>
                    </section>
                    <div className="pagination">
                        <button onClick="showGallery(1)">1</button>
                        <button onClick="showGallery(2)">2</button>
                        <button onClick="showGallery(3)">3</button>
                        <button onClick="showGallery(4)">4</button>
                        <button onClick="showGallery(5)">5</button>
                    </div>
                </div>
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

export default Gallery;
