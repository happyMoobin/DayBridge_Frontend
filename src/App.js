import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Form from "./Pages/Form";
import Gallery from "./Pages/Gallery";
import GalleryDetails from "./Pages/GalleryDetails";

function App() {
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        if(sessionStorage.getItem("user")){
            setIsLogin(true);
        }
    });

  return (
      <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DayBridge/" element={<Home />} />
        <Route path="/DayBridge/login" element={<Login />}/>
        <Route path="/DayBridge/signUp" element={<SignUp />}/>
        <Route path="/DayBridge/form" element={<Form />}/>
        <Route path="/DayBridge/gallery" element={<Gallery />} />
        <Route path="/DayBridge/galleryDetail" element={<GalleryDetails />} />
    </Routes>
      </>
  );
}

export default App;
