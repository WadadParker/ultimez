import React,{useState} from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();

  const [input,setInput] = useState({full_name:"",username:"",referral_id:"",email_id:"",country_row_id:
      "",mobile_number:"",password:""})

  const changeHandler=(inputField,text)=>
  {
    setInput(prev=>({...prev,[inputField]:text}));
  }

  const getData= async () => {
    try {
      const response = await fetch("https://lobster-app-ddwng.ondigitalocean.app/user/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "api_key":"Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH"
      },
      body:JSON.stringify(input)
    });
    const data = await response.json();

    console.log(data);
    localStorage.setItem("token",data.token);
    }
    catch(error)
    {
      console.log(error);
    }
  }

  const clickHandler= async ()=>
  {
    getData();
  }

  return (
    <div className='w-full h-full flex flex-col space-y-3 justify-center items-center shadow-lg shadow-blue-500'>
      <h1 className='text-white text-xl'>Login</h1>
      <p className='text-white'>Enter your account login details</p>

      <section className='bg-blue-400 flex flex-col space-y-4 rounded-lg p-4 w-1/2'>
        <input value={input.full_name} className='p-2' type="name" placeholder='Full name *' onChange={(e)=>changeHandler("full_name", e.target.value)}/>
        <input value={input.username} className='p-2' type="name" placeholder='User name *' onChange={(e)=>changeHandler("username", e.target.value)} />
        <select value={input.country_row_id} className='p-2' onChange={(e)=>changeHandler("country_row_id", e.target.value)}>
          <option value={""}>Select Country*</option>
          <option value={"India"}>India</option>
          <option value={"USA"}>USA</option>
          <option value={"Japan"}>Japan</option>
          <option value={"Sri Lanka"}>SRI lanka</option>
        </select>
        <input value={input.mobile_number}  className='p-2' type="name" placeholder='Mobile Number*'  onChange={(e)=>changeHandler("mobile_number", e.target.value)}/>
        <input value={input.email_id} className='p-2' type="name" placeholder='Email ID*' onChange={(e)=>changeHandler("email_id", e.target.value)}/>
        <input value={input.password} className='p-2' type="password" placeholder='Password' onChange={(e)=>changeHandler("password", e.target.value)}/>
        <input value={input.referral_id} className='p-2' type="name" placeholder='Referral ID' onChange={(e)=>changeHandler("referral_id", e.target.value)} />
        <button className='bg-yellow-400 text-blue-500 text-lg rounded py-2 ' onClick={()=>clickHandler()}>Register</button>
      </section>

      <p className='text-white'> Have an account? <span className='hover:cursor-pointer underline text-white' onClick={()=>navigate("/login")}>Sign In</span> Here </p>

    </div>
  )
}

export default Signup