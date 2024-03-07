import React from 'react'
import { MagnifyingGlassIcon,Bars3Icon } from '@heroicons/react/24/outline'


const Search = ({handleClick}) => {
  
  return (
    
    <div className=' w-screen lg:w-full border-b '>
       
        <input
            type='text'
            placeholder='Search'
            autoFocus
            className=' h-14 lg:h-16 w-full px-24 lg:px-14 text-sm bg-searchbarbg outline-none  relative placeholder:text-base'
        />
        <Bars3Icon
          className='h-10 w-8 ml-4  top-2 absolute flex  items-center lg:hidden'
          onClick={handleClick}
        />
         <MagnifyingGlassIcon
            className='h-6 lg:h-6 w-5 absolute flex items-center top-4 lg:top-5 lg:ml-4 ml-16 '
           
            
        />
    </div>
  )
}

export default Search