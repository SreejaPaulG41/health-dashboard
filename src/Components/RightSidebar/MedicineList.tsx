import React from 'react';
import SingleMedicine from './SingleMedicine';
import vitc from '../../Images/vitc.png';
import capcule from '../../Images/capcule.png';

const MedicineList: React.FC = () => {
    const medName: string[] = ["Vitamin C", "Ibuprofen"];
    const medTime: string[] = ["Before a meal every day", "After a meal every day"];
    const medImages: string[] = [vitc, capcule];
    
  return <div className='p-5 pt-0 '>
    {
      medName.map((item:string, index:number)=><SingleMedicine key={index} name={item} time={medTime[index]} image={medImages[index]}/>)
    }
  </div>;
}

export default MedicineList;
