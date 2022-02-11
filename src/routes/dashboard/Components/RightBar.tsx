import React , {useState, useEffect} from 'react';
import Profile from '../../../Components/RightSidebar/Profile';
import TinyCard from '../../../Components/RightSidebar/TinyCard';
import blood from '../../../Images/blood.jpg';
import pressure from '../../../Images/pressure.png';
import height from '../../../Images/heeight.jpg';
import weight from '../../../Images/weight.png';
import TreatmentCalender from '../../../Components/RightSidebar/TreatmentCalender';
import MedicineList from '../../../Components/RightSidebar/MedicineList';
import Payment from '../../../Components/RightSidebar/Payment';

const RightBar: React.FC = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const examType: string[] = ["Blood", "Pressure", "Height", "Weight"];
  const examValues: string[] = ["A+", "120/80", "158cm", "48.0Kg"];
  const images: string[] = [blood, pressure, height, weight];

  return <div>
    <Profile />
    <div className='flex ml-6'>
      {examType.map((item: string, index: number) => <TinyCard key={index} name={item} value={examValues[index]} image={images[index]} />)}
    </div>
    <TreatmentCalender startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
    <MedicineList startDate={startDate} endDate={endDate}/>
    <Payment/>
  </div>;
}

export default RightBar;
