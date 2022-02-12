import React, {useState} from 'react';
import {ChevronRightIcon } from '@heroicons/react/outline';

interface medicineType{
    name: string;
    time: string;
    image: string;
}
const SingleMedicine: React.FC<medicineType> = ({name, time, image})=> {
  const [bgStyle, setBgStyle] = useState<string>('');

  return <div className={'h-20 mb-2 p-2 flex justify-between rounded-lg border border-indigo-900 text-indigo-900' + bgStyle}>
      <div>
          <img src={image} alt={name} className='p-2'/>
      </div>
      <div>
          <div className='text-lg'>{name}</div>
          <div>{time}</div>
      </div>
      <div className={'h-10 w-15 p-2 m-3 rounded-lg border border-indigo-900'}>
        <ChevronRightIcon className='h-6 text-indigo-900'/>
      </div>
  </div>;
}

export default SingleMedicine;
