import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
  const [proName,setProName]=useState('')
  const [tech,setTech]=useState('')
  
  const navigate = useNavigate()
 
 
  function handleSubmit(e){
    e.preventDefault()
      if (proName==='balaji' && tech ==='balaji') {
        localStorage.setItem('ProjectInfo',true)
        navigate('/')
      }
      alert('submit work')
  }
  return (
    <div className='md:px-14 px-6  h-screen lg:py-2 '>
        <h1 className='font-semibold text-lg md:text-3xl pt-5 md:pt-2  text-blue-500 md:text-gray-300'>Upload the project description</h1>

        <form className='py-5 lg:py-8 'onSubmit={handleSubmit}>
          <Fragment>
            <label htmlFor='ProTittle' className='flex flex-col text-lg  pb-2'>
              Enter the Project title
              <input
                placeholder='enter the tech name'
                className='h-11 w-full lg:w-6/12 mt-2 rounded-md px-5 outline-none text-base '
                id='ProTittle'
                value={proName}
                onChange={(e)=>setProName(e.target.value)}
              />
            </label>
          </Fragment>
            <label htmlFor='Technology' className='flex flex-col pt-3 text-lg '>
              Enter the tech title
              <input
                placeholder='Enter the technology name'
                className='h-11 w-full lg:w-6/12 mt-2 rounded-md px-5 outline-none text-base'
                id='Technology'
                value={tech}
                onChange={(e)=>setTech(e.target.value)}
              />
            </label>
            <button type='submit' className=' h-10 md:h-12 px-10 md:px-20 bg-blue-600 rounded-md mt-5 md:mt-10 hover:bg-blue-800'>Submit</button>
        </form>
        <Fragment>
            <h2 className='font-bold text-lg text-gray-300 border-b '>Note</h2>
            <p className='md:text-base text-xs  py-2 text-gray-500'>There are many variations of humour, have suffered alteration in some form, by injected or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
        </Fragment>
    </div>
  )
}

export default Projects