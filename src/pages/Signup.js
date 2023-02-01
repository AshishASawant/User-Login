import React, { useState } from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {MdEmail,MdWork} from 'react-icons/md'
import {CgPhone} from 'react-icons/cg'
import {RiLockPasswordFill} from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {

    const success=()=>{toast.success("Register Successfull")}
    const failure=()=>{toast.error("Register failed")}

    const [signUp, setSignUp] = useState({
        name:"",
        email:"",
        phoneno:"",
        work:"",
        password:"",
        cpassword:""
    })

    const navigate=useNavigate()
    const onlyNumberKey=(evt)=>{
              
        // Only ASCII character in that range allowed
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
            return false;
        return true;
    }
    
    const handelOnChange=(e)=>{
        setSignUp({...signUp,[e.target.id]:e.target.value})
    }

    const handelSubmit=async(e)=>{
        const {name,email,phoneno,work,password,cpassword}=signUp
        e.preventDefault()
        if(password===cpassword){
            const data=await fetch('http://localhost:5000/signin',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({name,email,phoneno,work,password})
            })
            let res=await data.json()
            console.log(res)
            console.log(data)
            if(data.status===200){
                success()
                e.target.reset()
                navigate('/login')
            }
            else{
                failure()
            }
        }
    }

  return (
    <div className=' h-full flex-1 flex justify-center items-center '>
        <div className=' w-4/6 flex flex-row justify-between items-center p-14 shadow-2xl bg-white rounded-sm'>
            <form className='w-1/2 ml-5' onSubmit={handelSubmit}>
            <h2 className='text-4xl mb-10 font-semibold'>Sign Up</h2>
                <div className='flex flex-row items-center border-b-2 my-6 '>
                <FaUserAlt/>
                    <input type="text" onChange={handelOnChange} placeholder='Your Name' id='name' className='outline-none pb-1 pl-4 border-none w-full cursor-pointer' autoFocus required minLength={3} autoComplete="off"/>
                </div>
                <div className='flex flex-row items-center border-b-2 my-6'>
                <MdEmail/>
                    <input type="email" id='email'   onChange={handelOnChange} placeholder='Your Email' className='outline-none pb-1 pl-4 border-none w-full cursor-pointer' required autoComplete="off"/>
                </div>
                <div className='flex flex-row items-center border-b-2 my-6'>
                <CgPhone/>
                    <input type='tel' id='phoneno' pattern="[1-9]{1}[0-9]{9}"  onChange={handelOnChange} placeholder='Your Number' className='outline-none pb-1 pl-4 border-none w-full cursor-pointer' required onKeyUp={onlyNumberKey} autoComplete="off"/>
                </div>
                <div className='flex flex-row items-center border-b-2 my-6'>
                <MdWork/>
                    <input type="text" id='work' onChange={handelOnChange} placeholder='Your Profession' className='outline-none pb-1 pl-4 border-none w-full cursor-pointer' required autoComplete="off" />
                </div>
                <div className='flex flex-row items-center border-b-2 my-6'>
                <RiLockPasswordFill/>
                    <input type="password" id='password' onChange={handelOnChange} placeholder='Your Password' className='outline-none pb-1 pl-4 border-none w-full cursor-pointer fill-none ' required minLength={8} autoComplete="off"/>
                </div>
                <div className='flex flex-row items-center border-b-2 my-6'>
                <RiLockPasswordFill/>
                    <input type="password" id='cpassword' onChange={handelOnChange} placeholder='Confirm Password' className='outline-none pb-1 pl-4 border-none w-full cursor-pointer' required minLength={8} autoComplete="off" />
                </div>
                <div className='mt-6 '>
                    <input type="submit" value='Register' className='bg-cyan-500 shadow-lg shadow-cyan-500/50 text-xl  px-4 rounded-md text-[18px] text-white cursor-pointer py-1' required autoComplete="off"/>
                </div>
            </form>
            <div className='text-center cursor-pointer w-[30rem] pl-4 '>
                <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="Signup" className='w-full'/>
                <p><Link to='/login'> I am already registered</Link></p>
            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Signup

