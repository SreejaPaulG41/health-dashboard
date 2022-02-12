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

interface med {
  startDate: string;
  endDate: string;
  name: string;
  timing: string;
}
const MedicineList: React.FC<mediDayType> = ({ startDate, endDate }) => {
  const [medicines, setMedicines] = useState<med[]>([]);
  const medImages: string[] = [vitc, capcule];

  useEffect(() => {
    const res = mediData.filter((item) => {
      return (dateCheck(startDate, item.startDate, item.endDate, "start") || dateCheck(endDate, item.startDate, item.endDate, "end"));
    })
    setMedicines(res);
  }, [startDate, endDate])

  function dateCheck(dateCheck: string, dateFrom: string, dateTo: string, type: string) {
    let d1 = dateFrom.split("/");
    let d2 = dateTo.split("/");
    let c = dateCheck.split("/");

    let from = new Date(parseInt(d1[2]), parseInt(d1[1]) - 1, parseInt(d1[0])); 
    let to = new Date(parseInt(d2[2]), parseInt(d2[1]) - 1, parseInt(d2[0]));
    let check = new Date(parseInt(c[2]), parseInt(c[1]) - 1, parseInt(c[0]));

    return (check>=from && check<=to);
  }

  return <div className='p-5 pt-0 '>
    {
      medicines.map((item, index) => <SingleMedicine key={index} name={item.name} time={item.timing} image={medImages[index]} />)
    }
  </div>;
}

export default MedicineList;
