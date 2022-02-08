import React from 'react';
import {PlusIcon, TrashIcon} from '@heroicons/react/outline';
import Card from './Card';

const Payment: React.FC = () => {
  return <div className='p-5 pt-2'>
      <div className='font-bold text-lg'>Payment</div>
      <div className='flex'>
          <div className='flex-auto w-96'>
              <Card/>
          </div>
          <div className='flex-auto w-4 mt-8'>
              <div className=' border border-dashed border-indigo-900 rounded-lg '>
                  <PlusIcon className='h-10 m-2 p-2 pl-1 text-indigo-900'/>
              </div>
              <div className='mt-4 border border-red-500 rounded-lg'>
                  <TrashIcon className='h-10 m-2 p-2 pl-1 text-red-500'/>
              </div>
          </div>
      </div>
    </div>;
}

export default Payment;
