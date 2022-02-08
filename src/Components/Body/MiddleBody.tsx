import React from 'react';
import GraphContainer from './GraphContainer';
import MyAppointments from './MyAppointments';
import Searchbar from './Searchbar';
import SmallCardContainer from './SmallCardContainer';

const MiddleBody: React.FC = ()=> {
  return <div  className='bg-indigo-50 pl-5'>
    <Searchbar/>
    <GraphContainer/>
    <SmallCardContainer/>
    <MyAppointments/>
  </div>;
}

export default MiddleBody;
