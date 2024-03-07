import React, { Fragment, useState } from 'react'
import logo from "../../Navbar/logo.svg"
import { useNavigate } from 'react-router-dom'


const Settings = () => {
    const [firstName,setFirstName]=useState()
    const [password,setPassword]=useState()
    const navigate = useNavigate()

    function loginSubmit(e) {
        e.preventDefault()
        if(firstName==='balaji' && password==='balaji'){
            localStorage.setItem('loginCredential',true)
            console.log('function works properly');
            navigate('/deployment')
        }
    }
    
  return (
    <div className='flex flex-col items-center py-5  h-screen'>
            <Fragment>
                <img src={logo} alt='logo' className='h-12'/>
            </Fragment>
            <div className='text-2xl'>
                <p className='text-white  font-semibold  pt-5'>
                    Sign in to your account
                </p>
            </div>
        <form className='py-8' onSubmit={(e)=>loginSubmit(e)}>
            <label htmlFor='email'
                className='text-sm font-medium opacity-90 text-medium text-white pt-5'
            >
                Email address
            </label>
            <br/>
            <input 
                type='text'
                required
                autoFocus
                id='email'
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                className='h-10 sm:w-72 md:w-80 lg:w-96 w-64 rounded-md  bg-border-bg flex flex-col px-5 mt-1 text-white'
                
            />
            <br/>
            <div className='flex  justify-between items-center text-sm'>
            <label htmlFor='password'
                className=' font-medium opacity-90 text-white '
            >
                Password
            </label>
            <p className=' font-semibold text-blue-font py-1 cursor-pointer'>Forget password</p>
            </div>
            
            <input 
                type='password'
                required
                value={password}
                id='password'
                onChange={(e)=>setPassword(e.target.value)}
                autoFocus
                className='h-10 sm:w-72 md:w-80 lg:w-96 w-64 rounded-md  bg-border-bg flex flex-col px-5 mt-1 text-white'
                
            />
            <button 
                type='submit'
                htmlFor='submit'
                id='submit'
                className='h-10 sm:w-72 md:w-80 lg:w-96 w-64 rounded-md bg-blue-600  text-sm font-semibold mt-8'>
                Sign in
            </button>
            <div className='text-sm text-gray-400 font-semibold my-8 flex justify-center items-center '>
                    <p>Not a member? </p>
                    <span className='ml-1 line-clamp-2 text-blue-font text-sm font-semibold cursor-pointer'>
                        Start a 14 day free trial
                    </span>
                </div>




        </form>
    </div>
  )
}

export default Settings