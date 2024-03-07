import React from 'react'
import { Link } from 'react-router-dom'


const Nav = ({data,index}) => {
  return (
    <ul className='h-auto w-full text-base font-semibold text-gray-400'>
      <li 
             key={index} 
            //  onClick={()=>{id = data.link}}
            //  className='h-11 w-full flex items-center justify-center  hover:bg-tailbg-gray hover:text-white'
          >
          <Link to={data.link} className='h-11 w-full flex items-center justify-center  hover:bg-tailbg-gray hover:text-white'>
            <div id='icon' className='pl-5 lg:pl-8'>{data.icon}</div>
            <div className='mr-auto pl-2 lg:pl-3'>{data.title}</div>
          </Link>
            
         
        </li>
          
       </ul>
         
  )
}

export default Nav