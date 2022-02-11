import React , {useEffect, useState} from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Data from '../../Data/Appointments/AppointmentsDetails.json';
import BasicTable from './Table/BasicTable';

const MyAppointments: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const maxRow = 3;

  const nextPageChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    setCurrentPage(prev=>prev+1);
  }

  const prevPageChange:(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void  = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    setCurrentPage(prev=>prev-1);
  }
  console.log(((((currentPage + 1)-1) * maxRow)===Data.length))
  return <div>
    <div className='flex'>
      <div className='flex-1 m-2 font-bold text-indigo-900'>My Appointments</div>
      <div className='flex mt-5 mr-5 border border-gray-400'>
        <button onClick={(e)=>prevPageChange(e)} disabled={(currentPage===1)?true:false} className='disabled:cursor-not-allowed cursor-pointer'>
          <ChevronLeftIcon className='h-7 pr-2 border border-r-1 border-r-dashed border-gray-300 border-t-0 border-l-0 border-b-0' />
        </button>
        <button onClick={(e)=>nextPageChange(e)} disabled={((((currentPage + 1)-1) * maxRow)===Data.length) ? true : false} className='disabled:cursor-not-allowed cursor-pointer'>
          <ChevronRightIcon className='h-7 pr-2' />
        </button>
      </div>
    </div>
    <BasicTable currentPage={currentPage} maxRow={maxRow}/>
  </div>;
}

export default MyAppointments;
