import React from 'react';
import {CogIcon, BellIcon} from '@heroicons/react/solid';
import image from '../../Images/ImageSquare.png';

const Profile: React.FC = () => {
  return <div className='flex text-indigo-900 p-5'>
      <div className='flex flex-1 text-none'>
          <CogIcon className='h-6 pr-2 '/>
          <BellIcon className='h-6 pr-2 '/>
      </div>
      <div className='flex'>
          <div className='pr-2'>
              <div className='font-bold'>Laurent Aushy</div>
              <div className='text-xs'>32 Years, New York</div>
          </div>
          <div className='rounded-lg bg-orange-400 h-8 w-8'><img src={image} alt="img" /></div>
      </div>
  </div>;
}

export default Profile;
