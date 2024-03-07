import React, { Fragment, useContext } from 'react'
import Activity from './Activity'

const Deployement = () => {
        
  return (
    <div className='flex  h-screen w-full overflow-y-hidden '>
    <div className=' w-full lg:w-3/5 border-r  overflow-y-scroll no-scrollbar h-full'>
    <div className='flex px-5 py-3 justify-between items-center font-semibold text-lg border-r'>
        <p >Deployment</p>
        <p>Sort by </p>
        
    </div>
      <div className=' flex h-auto border py-3 px-5  justify-between items-center'>
            <Fragment>
                 <p className=' mb-2 font-semibold text-md'>balaji <span className='text-gray-300'>&#47;</span> ios-app</p>
                 <div className='flex justify-around items-center text-xs'>
                         <p className='mr-3'>Deploys From GitHub</p>
                         <p> <span className='text-green-300 mr-2'>•</span>Initiated 1m 32s ago</p>
                 </div>
            </Fragment>
            <Fragment>
                <div className='flex justify-center items-center '>
                        <p className='mr-2 text-[10px] border rounded-2xl px-2  text-blue-500  border-blue-400  '>Preview</p>
                        <p className='text-xs '>	&gt;</p>
                </div>
            </Fragment>
      </div>
      
      
    </div>
      <Activity/>
    </div>
  )
}

export default Deployement