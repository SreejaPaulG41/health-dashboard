import React from 'react';
import {ChevronRightIcon } from '@heroicons/react/outline';

interface medicineType{
    name: string;
    time: string;
    image: string;
}
const SingleMedicine: React.FC<medicineType> = ({name, time, image})=> {
  return <div className={(name === "Vitamin C") ? 'h-20 p-2 flex justify-between rounded-lg bg-indigo-900 text-white' : 'h-20 p-2 flex justify-between border border-gray-400 rounded-lg mt-3'}>
      <div>
          <img src={image} alt={name} className='p-2'/>
      </div>
      <div>
          <div className='text-lg'>{name}</div>
          <div>{time}</div>
      </div>
      <div className={(name === "Vitamin C") ? 'h-10 w-15 p-2 m-3 rounded-lg bg-white' : 'h-10 w-15 p-2 m-3 rounded-lg border border-indigo-900'}>
        <ChevronRightIcon className='h-6 text-indigo-900'/>
      </div>
  </div>;
}

export default SingleMedicine;
