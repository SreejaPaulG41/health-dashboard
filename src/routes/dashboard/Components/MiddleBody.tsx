import React from 'react';
import GraphContainer from '../../../Components/Body/GraphContainer';
import MyAppointments from '../../../Components/Body/MyAppointments';
import Searchbar from '../../../Components/Body/Searchbar';
import SmallCardContainer from '../../../Components/Body/SmallCardContainer';

const MiddleBody: React.FC = ()=> {
  return <div  className='bg-indigo-50 pl-5'>
    <Searchbar/>
    <GraphContainer/>
    <SmallCardContainer/>
    <MyAppointments/>
  </div>;
}

export default MiddleBody;
