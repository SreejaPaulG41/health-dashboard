import React, { useState, useEffect } from 'react';
import SingleMedicine from './SingleMedicine';
import vitc from '../../Images/vitc.png';
import capcule from '../../Images/capcule.png';
import mediData from '../../Data/TreatmentInformation/MedicineInformation.json';
import { isConstructorDeclaration } from 'typescript';

interface mediDayType {
  startDate: string;
  endDate: string;
}

interface med{
  startDate: string;
  endDate: string;
  name: string;
  timing: string;
}
const MedicineList: React.FC<mediDayType> = ({ startDate, endDate }) => {
  const [medicines, setMedicines] = useState<med[]>([]);
  const medName: string[] = ["Vitamin C", "Ibuprofen"];
  const medTime: string[] = ["Before a meal every day", "After a meal every day"];
  const medImages: string[] = [vitc, capcule];

  useEffect(() => {
    const res = mediData.filter((item)=>{
      return dateCheck(startDate, endDate, item.startDate) && dateCheck(startDate, endDate, item.endDate); 
    })
    setMedicines(res);
  }, [startDate, endDate])

  function dateCheck(from:string, to:string, check:string) {
    var d1 = from.split('/');
    var d2 = to.split('/');
    var d3 = check.split('/');

    if(d3[2]>=d1[2] && d3[2]<=d2[2]){
      if(d3[1]>=d1[1] && d3[1]<=d2[1]){
        if(d3[0]>=d1[0] && d3[0]<=d2[0]){
          return true;
        }else{
          return false;
        }
      }else{
        return false;
      }
    }else{
      return false;
    }
  }
  
  return <div className='p-5 pt-0 '>
    {
      medicines.map((item, index) => <SingleMedicine key={index} name={item.name} time={item.timing} image={medImages[index]} />)
    }
  </div>;
}

export default MedicineList;
