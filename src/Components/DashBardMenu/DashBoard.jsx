import React, { useState } from 'react'
import NavBar from './Navbar/NavBar'
import Search from './SearchBar/Search'
import Deployement from './Navbar/NavItems/Deployement' ;
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Projects from './Navbar/NavItems/Projects';
import Activity from './Navbar/NavItems/Activity';
import Domains from './Navbar/NavItems/Domains';
import Usage from './Navbar/NavItems/Usage';
import Settings from './Navbar/NavItems/Settings'

const DashBoard = () => {
  const [open,setOpen] = useState(false)
  const [close,setClose]=useState(false)
    function handleClick(){
      setOpen(!open)
      setClose(false)
      console.log('ok')
      
    }

  return (
      
    <>
   <BrowserRouter>
      <div className='w-screen  h-screen  border flex  text-white '>
          
             <NavBar userName='Tom Cook'open={open} handleClick={handleClick} />

          <div className='lg:w-4/5  h-full w-full flex flex-col'>
                <Search handleClick={handleClick} open={open}/>
             
             
             <Routes>
                      <Route path='/projects' element={<Projects/>} />
                      <Route path='/deployment' element={<Deployement/> } />
                      <Route path='/activity' element={<Activity/>} />
                      <Route path='/domains' element={<Domains/>} />
                      <Route path='/usage' element={<Usage/>} />
                      <Route path='/' element={<Settings/>} />
                </Routes>
                 

          </div>
          

      </div>
      </BrowserRouter>
            
  
      
          


   </>
       
  )
}

export default DashBoard