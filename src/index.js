import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/signup";
import Aboutus from "./pages/aboutus/aboutus";
import UserProfile from "./pages/userprofile/userProfile";
import Home from "./pages/home/home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            {/* <Route path="/filterui" element={<Filterui/>} /> */}
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
