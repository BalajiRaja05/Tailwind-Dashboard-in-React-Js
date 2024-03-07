import React, { Fragment } from "react";
import {
  FolderIcon,
  ServerIcon,
  SignalIcon,
  GlobeAltIcon,
  ChartBarSquareIcon,
  Cog8ToothIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Nav from "./Nav";
import Teams from "./Teams";
import logo from "../Navbar/logo.svg";


const data = [
  {
    
     title: "Projects",
     icon: <FolderIcon className="h-6 w-6" />,
     link: "/projects",
    
  },
  {
    title: "Deployment",
    icon: <ServerIcon className="h-6 w-6" />,
    link: "/deployment",
  },
  {
    title: "Activity",
    icon: <SignalIcon className="h-6 w-6" />,
    link: "/activity",
  },
  {
    title: "Domains",
    icon: <GlobeAltIcon className="h-6 w-6" />,
    link: "/domains",
  },
  {
    title: "Usage",
    icon: <ChartBarSquareIcon className="h-6 w-6" />,
    link: "/Usage",
  },
  {
    title: "Settings",
    icon: <Cog8ToothIcon className="h-6 w-6" />,
    link: "/",
  },
];
const teamsData = [
  {
    letter: "P",
    title: "Planetaria",
  },
  {
    letter: "P",
    title: "Protocols",
  },
  {
    letter: "T",
    title: "Tailwind Labs",
  },
];

const NavBar = ({ userName,open ,handleClick}) => {
  return (
    <>
    <div className={open?" z-50 border-r w-4/5 md:w-2/5 lg:w-1/5 h-screen bg-tailwind absolute lg:static ": "hidden lg:block w-1/5 border h-full bg-tailwind "}>
    {/* <div className="hidden lg:block w-1/5 border h-full bg-tailwind"> */}
    
      <div className="pt-3 mb-4 w-full flex">
        <img src={logo} className="h-10 w-10 ml-5 lg:ml-8 " alt="tailwindIcon" />
        <XMarkIcon className="h-6 w-6 lg:hidden ml-auto mr-5 " onClick={handleClick}/>
      </div>
      

      {/* -------------Navitems------------ */}
      <Fragment>
        {data.map((obj, index) => { 
          return <Nav data={obj} key={index} />;
        })}
      </Fragment>

      {/* -------------teams------------ */}
      <div className="h-auto w-full text-base font-semibold text-gray-400 ">
        <h3 className="pl-5 lg:pl-8 py-3">Teams</h3>
        <ul>
          {teamsData.map((val, index) => {
            return <Teams teamsData={val} key={index} />;
          })}
          
        </ul>
        
      </div>
      <div className="pl-5 lg:pl-8   flex   justify-start items-center   h-10 w-full mt-14  xl:mt-24  font-semibold text-gray-400  hover:bg-tailbg-gray hover:text-white">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="user"
            className="h-7 w-7 rounded-2xl mr-2  "
          />
          <h3 className="">{userName}</h3>
      </div>
     
    </div>
          

    </>
  );
};

export default NavBar;
