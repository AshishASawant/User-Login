import React, { useState } from "react";
import { MdEmail, MdPhoneIphone } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ data }) => {

  const success = () => toast.success("Message Sent");

  const [contactDetails, setContactDetails] = useState({
    name: data.name,
    email: data.email,
    phoneno: data.phoneno,
    message: "",
  });

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    let data = await fetch("http://localhost:5000/contact", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: contactDetails.message }),
    });
    let res = await data.json();
    success();
    e.target.reset();
  };

  return (<>
    <div className="flex flex-col flex-1 ">
      <div className="flex flex-column justify-evenly items-center  h-48 ">
        <div className=" h-24 flex items-center  flex-row  border-slate-400 border-[2.5px] w-[30%] mx-2 pl-4 bg-white">
          <MdPhoneIphone className="text-blue-300 h-10 w-10" />
          <div className="pl-2">
            <p className="block font-bold text-lg">Phone</p>
            <p className="text-slate-600 text-sm">+91 12345 67890</p>
          </div>
        </div>
        <div className=" h-24 flex items-center  flex-row  border-slate-400 border-[2.5px] w-[30%] mx-2 pl-4 bg-white">
          <MdEmail className="text-blue-300 h-10 w-10" />
          <div className="pl-4">
            <p className="block font-bold text-lg">Email</p>
            <p className="text-slate-600 text-sm">gmail@email.com</p>
          </div>
        </div>
        <div className=" h-24 flex items-center  flex-row  border-slate-400 border-[2.5px] w-[30%] mx-2 pl-4 bg-white">
          <FaMapMarkedAlt className="text-blue-300 h-10 w-10 " />
          <div className="pl-4">
            <p className="block font-bold text-lg">Address</p>
            <p className="text-slate-600 text-sm">Mumbai, Maharashtra</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-2/3 shadow-2xl mb-4 flex items-center flex-col p-10 bg-white rounded-sm">
          <p className="text-3xl font-semibold mb-6 w-full ">Get In Touch</p>
          <form className="w-full" onSubmit={handelOnSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={contactDetails.name}
              className="inline pl-4 outline-none border-2 h-12 w-[30%] "
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="You Email"
              value={contactDetails.email}
              className="inline pl-4 outline-none border-2 h-12 w-[30%] mx-[5%]"
            />
            <input
              type="tel"
              name="number"
              id="number"
              placeholder="Your Number"
              value={contactDetails.phoneno}
              className="inline pl-4 outline-none border-2 h-12 w-[30%] "
            />
            <textarea
              name="msg"
              id="msg"
              rows="10"
              onChange={(e) => {
                setContactDetails({
                  ...contactDetails,
                  message: e.target.value,
                });
              }}
              placeholder="Message"
              className="block  mt-2 pl-4 outline-none border-2 w-full"
            ></textarea>
            <button
              type="submit"
              value={contactDetails.message}
              className="w-36 mt-6 p-2 rounded-md bg-cyan-200 border-2 hover:bg-cyan-600 hover:scale-110"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <ToastContainer/>
    </>
  );
};

export default Contact;
