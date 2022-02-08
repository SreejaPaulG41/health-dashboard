import React, { useMemo } from 'react';
import { Data } from './Data';
import { COLUMNS } from './TableClm';
import image from '../../../Images/ImageSquare.png';
import { CheckIcon, ClockIcon, DotsHorizontalIcon, SwitchVerticalIcon, AdjustmentsIcon } from '@heroicons/react/solid';

const BasicTable: React.FC = () => {
  return <div className='border-b border-gray-500'>
    
    <table className='m-5 p-5 text-indigo-900'>
      <thead>
        <tr>
          {COLUMNS.map((item, index) =>
            <th key={index} className='w-32 p-4 pl-1'>
              {item.Header === "Settings" ? <AdjustmentsIcon className='h-6 pr-2 text-indigo-900' /> : <div className='flex'>{item.Header} <SwitchVerticalIcon className='h-6 pr-2' /></div>}
            </th>)}
        </tr>
      </thead>
      <tbody>
        {Data.map((item, index) =>
          <tr key={index} className={(index===1)? 'text-white bg-indigo-900': "text-indigo-900 bg-white"}>
            <td className='w-32 p-3 h-10'>
              <div className='flex space-x-3'>
                <div className='rounded-lg bg-orange-400 h-8 w-8'><img src={image} alt="img" /></div>
                <div>{item.name}</div>
              </div>
            </td>
            <td className='w-32'>{item.specialist}</td>
            <td className='w-32'>{item.date}</td>
            <td className='w-32'>{item.time}</td>
            <td className='w-32 text-center'>{item.status ? <CheckIcon className='h-6 pr-2 text-blue-400'/> : <ClockIcon className='h-6 pr-2 text-red-500'/>}</td>
            <td className='w-32'>{item.settings ? <DotsHorizontalIcon className='h-6 pr-2 text-gray-400'/> : ""}</td>
          </tr>)}
      </tbody>
    </table>

  </div>;
}

export default BasicTable;
