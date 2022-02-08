import React from 'react';
import Profile from './Profile';
import TinyCard from './TinyCard';
import blood from '../../Images/blood.jpg';
import pressure from '../../Images/pressure.png';
import height from '../../Images/heeight.jpg';
import weight from '../../Images/weight.png';
import { toNamespacedPath } from 'path/posix';
import TreatmentCalender from './TreatmentCalender';
import MedicineList from './MedicineList';
import Payment from './Payment';

const RightBar: React.FC = () => {
  const examType: string[] = ["Blood", "Pressure", "Height", "Weight"];
  const examValues: string[] = ["A+", "120/80", "158cm", "48.0Kg"];
  const images: string[] = [blood, pressure, height, weight];

  return <div>
    <Profile />
    <div className='flex ml-6'>
      {examType.map((item: string, index: number) => <TinyCard key={index} name={item} value={examValues[index]} image={images[index]} />)}
    </div>
    <TreatmentCalender/>
    <MedicineList/>
    <Payment/>
  </div>;
}

export default RightBar;
