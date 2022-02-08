import React from 'react';
import BasicTable from './Table/BasicTable';

const MyAppointments: React.FC = ()=> {
  return <div>
      <div className='m-2 font-bold text-indigo-900'>My Appointments</div>
      <BasicTable/>
  </div>;
}

export default MyAppointments;
