import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import { Cookies } from "react-cookie";

const App = () => {
  const cookies = new Cookies();

  const [checkLogin, setCheckLogin] = useState(false);
  const [userData, setUserData] = useState("");

  useEffect(() => {
    if (cookies.get("jwttoken")) {
      setCheckLogin(true);
    }
  }, []);

  useEffect(() => {
    if (checkLogin) {
      getUserData();
    }
  }, [checkLogin]);

  const getUserData = async () => {
    const data = await fetch("http://localhost:5000/about", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let res = await data.json();
    if (data.status === 200) {
      setUserData(res.data);
      console.log(res.data);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative w-full libg">
      <Navbar checkLogin={checkLogin} setCheckLogin={setCheckLogin} setUserData={setUserData}/>
      <Routes>
        <Route exact path="/home" element={<Home data={userData} />}></Route>
        <Route exact path="/" element={<Navigate to="/home" />} />
        {!checkLogin && (
          <Route exact path="/signup" element={<Signup />}></Route>
        )}
        {!checkLogin && (
          <Route
            exact
            path="/login"
            element={<Login setCheckLogin={setCheckLogin} />}
          ></Route>
        )}
        {checkLogin && (
          <Route
            exact
            path="/about"
            element={<About data={userData} />}
          ></Route>
        )}
        {checkLogin && (
          <Route
            exact
            path="/contact"
            element={<Contact data={userData} />}
          ></Route>
        )}
        {checkLogin && <Route path="*" element={<ErrorPage />}></Route>}
      </Routes>
    </div>
  );
};

export default App;
