import React from 'react';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true // 로그인 상태를 관리하는 state
        };
    }

    start = () => {
        const { isLoggedIn } = this.state;
        if (isLoggedIn) {
            window.location.href = "/DayBridge/form";
        } else {
            window.location.href = "/DayBridge/login";
        }
    }

    navigate = (event) => {
        event.preventDefault();
        const { isLoggedIn } = this.state;
        const href = event.target.getAttribute("href");
        if (isLoggedIn) {
            window.location.href = href;
        } else {
            window.location.href = "/DayBridge/login";
        }
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1><a href="/DayBridge/">ROOMSTYLER</a></h1>
                    <div className="nav">
                        <ul>
                            <li><a href="/DayBridge/gallery" onClick={this.navigate}>My Gallery</a></li>
                            <li><a href="/DayBridge/login">Login</a></li>
                            <li><a href="/DayBridge/signUp">SignUp</a></li>
                        </ul>
                    </div>
                </div>
                <div className="sector">
                    <h2>DESIGN YOUR ROOM</h2>
                    <p>당신의 방을 대신 꾸며드립니다</p>
                    <button onClick={this.start}>START</button>
                </div>
            </div>
        );
    }
}

export default Home;
