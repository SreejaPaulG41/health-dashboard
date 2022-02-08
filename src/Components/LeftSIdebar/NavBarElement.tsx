import React from 'react';
import { HomeIcon, UserIcon, CalendarIcon , CashIcon, ChatIcon, PhoneIcon } from '@heroicons/react/solid';


interface SingleNavElement {
  dataItem: string;
}

const NavBarElement: React.FC<SingleNavElement> = ({ dataItem }) => {
  
  return <div>
    {(dataItem === "Home") ? 
    <div className='h-16 p-5 pl-0 pt-20 mb-5 '>
      <div className='h-10 pl-5 border-white border-l-4 flex'>
        <HomeIcon className='h-8 pr-2'/>
        <span className='font-semibold pt-2'>{dataItem}</span>
      </div>
    </div>
    :
    <div className='h-16 p-5 mb-2 opacity-25 flex'>
      {
        {
          'Doctors': <UserIcon className='h-8 pr-2'/>,
          "Appointments": <CalendarIcon className='h-8 pr-2'/>, 
          "Billing": <CashIcon className='h-8 pr-2'/>, 
          "Message": <ChatIcon className='h-8 pr-2'/>, 
          "Support": <PhoneIcon className='h-8 pr-2'/>
        }[dataItem]
      }
      <span className='font-semibold  pt-2'>{dataItem}</span>
    </div>
    }
  </div>;
}

export default NavBarElement;
