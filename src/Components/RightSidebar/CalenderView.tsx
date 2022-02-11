import './styles.css';
import { useState } from "react";
import Calendar from "./Calender";

interface calenderPickerType {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  startDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  endDate: string;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
}

const CalenderView: React.FC<calenderPickerType> = ({ selectedDate, setSelectedDate, startDate, setStartDate, endDate, setEndDate }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);

  const showDetailsHandle = (dayStr: any) => {
    setData(dayStr);
    setShowDetails(true);
  };

  return (
    <div className='text-center m-0 block p-2 w-full bg-gray-100'>
      <Calendar showDetailsHandle={showDetailsHandle} calSelectedDate={selectedDate} calSetSelectedDate={setSelectedDate} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
    </div>
  );
}

export default CalenderView;

