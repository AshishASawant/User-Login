import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Navbar = ({checkLogin,setCheckLogin,setUserData}) => {
  const location = useLocation();
  const cookies = new Cookies();
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-wrap flex-row justify-between items-center px-4 bg-slate-100 sticky top-0">
        <div className="h-9 w-[7rem] my-2 ml-4">
          <img
            src="https://www.klipfolio.com/sites/default/files/partners/white_logo_color_background.jpg"
            alt="dashboard"
            className="rounded-md h-full"
          />
        </div>
        <div>
          <ul className="flex flex-row font-semibold text-slate-400 text-lg">
           <li
              className={`mx-4 flex items-center justify-center ${
                location.pathname === "/home" ? "text-black" : ""
              }`}
            >
              <Link to="/home"> Home</Link>
            </li>
            {checkLogin &&<li
              className={`mx-4 flex items-center justify-center ${
                location.pathname === "/about" ? "text-black" : ""
              }`}
            >
              <Link to="/about">About</Link>
            </li>}
            {checkLogin &&<li
              className={`mx-4 flex items-center justify-center ${
                location.pathname === "/contact" ? "text-black" : ""
              }`}
            >
              <Link to="/contact">Contact</Link>
            </li>}
            {!checkLogin &&<li
              className={`mx-4 flex items-center justify-center ${
                location.pathname === "/login" ? "text-black" : ""
              }`}
            >
              <Link to="/login">Login</Link>
            </li>}
            {!checkLogin &&<li
              className={`mx-4 flex items-center justify-center ${
                location.pathname === "/signup" ? "text-black" : ""
              }`}
            >
              <Link to="/signup">Signup</Link>
            </li>}
            {checkLogin &&<li
              className={`mx-4 flex items-center justify-center cursor-pointer text-slate-600`}
              onClick={() => {
                setCheckLogin(false)
                navigate("/login");
                cookies.remove("jwttoken");
                toast.success("Logout Successfull")
                setUserData("")
              }}
            >
              Logout
            </li>}
          </ul>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Navbar;
