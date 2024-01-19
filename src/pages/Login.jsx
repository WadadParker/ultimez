import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-full flex flex-col space-y-3 justify-center items-center shadow-lg shadow-blue-500'>
      <h1 className='text-white text-xl'>Login</h1>
      <p className='text-white'>Enter your account login details</p>

      <section className='bg-blue-400 flex flex-col space-y-4 rounded-lg p-4 w-1/2'>
        <input className='p-2' type="name" placeholder='user name or email' />
        <input className='p-2' type="password" placeholder='Password' />
        <button className='bg-yellow-400 text-blue-500 text-lg rounded py-2 '>Sign in</button>
      </section>

      <p className='text-white'>Dont you have an account? <span className='hover:cursor-pointer underline text-white' onClick={()=>navigate("/signup")}>Sign Up</span> </p>

    </div>
  )
}

export default Login