import React from 'react';
import {CogIcon, BellIcon} from '@heroicons/react/solid';
import image from '../../Images/ImageSquare.png';
import personalInfo from '../../Data/PersonalInformation.json';

const Profile: React.FC = () => {
  return <div className='flex text-indigo-900 p-5'>
      <div className='flex flex-1 text-none'>
          <CogIcon className='h-6 pr-2 '/>
          <BellIcon className='h-6 pr-2 '/>
      </div>
      <div className='flex'>
          <div className='pr-2'>
              <div className='font-bold'>{personalInfo[0].name}</div>
              <div className='text-xs'>{personalInfo[1].Age + " "+ personalInfo[2].place}</div>
          </div>
          <div className='rounded-lg bg-orange-400 h-8 w-8'><img src={image} alt="img" /></div>
      </div>
  </div>;
}

export default Profile;
