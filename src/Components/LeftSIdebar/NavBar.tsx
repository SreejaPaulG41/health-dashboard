import React from 'react';
import NavBarElement from './NavBarElement';
import { LogoutIcon } from '@heroicons/react/solid'

const NavBar = ()=> {
    const navEleTitles : string[] = ["Home", "Doctors", "Appointments", "Billing", "Message", "Support"];
  return <div className='w-full h-full bg-indigo-900 m-2 mb-0 ml-0 text-white rounded-tr-full'>
      <div>
      {
          navEleTitles.map((item : string, index: number)=><NavBarElement key={Date.now()} dataItem={item} />)
      }
      </div>
      <div className='h-20 p-5 mt-48 flex'>
          <LogoutIcon className='h-8 pr-2'/>
          <span className='font-semibold  pt-2'>{"Logout"}</span>
      </div>
  </div>;
}

export default NavBar;
