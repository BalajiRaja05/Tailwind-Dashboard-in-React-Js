import React, { Fragment } from 'react'

const Teams = ({teamsData,index}) => {
  return (
    <Fragment>
         
            
                  <li 
                    key={index}
                    className='h-11 w-full flex items-center justify-center  hover:bg-tailbg-gray hover:text-white'

                    >
                        <div className='ml-5 lg:ml-8 border border-gray-600 rounded-lg outline-none  px-2 py-1 text-xs bg-Teams'>{teamsData.letter}</div>
                        <div className='mr-auto pl-2 lg:pl-3'>{teamsData.title}</div>
                  </li>
                
              
                 
            
              
            
    </Fragment>
  )
}

export default Teams