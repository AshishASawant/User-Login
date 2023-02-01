import React, { useState } from 'react'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = ({setCheckLogin}) => {

    const success=()=>{toast.success("Login Successfull")}
    const failure=()=>{toast.error("Login failed")}

    const [login, setLogin] = useState({email:"",password:""})
    const navigate=useNavigate()

    const handelLogin=async(e)=>{
        e.preventDefault()
        let data=await fetch('http://localhost:5000/login',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:login.email,
                password:login.password
            }),credentials: "include"
        })
        let res=await data.json()
        if (data.status===200) {
            success()
            e.target.reset()
            navigate('/home')
            setCheckLogin(true)
        }else{
            failure()
        }
    }

    const handelOnChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
    }

  return (
    <div className='flex-1 flex justify-center items-center '>
    <div className=' w-4/6 flex flex-row-reverse justify-between items-center p-14 shadow-2xl bg-white rounded-sm'>
        <form className='w-1/2' onSubmit={handelLogin}>
        <h2 className='text-4xl mb-14 font-semibold'>Login</h2>
            <div className='flex flex-row items-center border-b-2 my-6'>
            <MdEmail/>
                <input type="email" placeholder='Your Email' onChange={handelOnChange} name='email' className='outline-none pb-1 pl-4 border-none w-full cursor-pointer' autoComplete='off' required/>
            </div>
            <div className='flex flex-row items-center border-b-2 my-6'>
            <RiLockPasswordFill/>
                <input type="password" name='password' onChange={handelOnChange} placeholder='Your Password' className='outline-none pb-1 pl-4 border-none w-full cursor-pointer fill-none ' required minLength={8}/>
            </div>
           
            <div className='mt-6 '>
                <input type="submit" value='Login' className='bg-cyan-500 shadow-lg shadow-cyan-500/50 text-xl py-1  px-4 rounded-md text-[18px] text-white cursor-pointer'/>
            </div>
        </form>
        <div className='text-center cursor-pointer w-[22rem] pl-4'>
            <img src="https://www.sbicard.com/creditcards/resources/img/digi-col-login.png" alt="Signup" className='w-full mb-4'/>
            <p><Link to='/signup'>I don't have an account</Link></p>
        </div>
    </div>
    <ToastContainer/>
</div>
  )
}

export default Login