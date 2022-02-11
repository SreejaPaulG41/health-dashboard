import React, {useState} from 'react';
import { CalendarIcon } from '@heroicons/react/outline';
import CalenderView from './CalenderView';
import CalendarPicker from './CalendarPicker';

interface dateType {
    startDate: string;
    setStartDate: React.Dispatch<React.SetStateAction<string>>;
    endDate: string;
    setEndDate: React.Dispatch<React.SetStateAction<string>>;
}

const TreatmentCalender: React.FC<dateType> = ({startDate, setStartDate, endDate, setEndDate}) => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    return <div className='p-5 text-indigo-900 mt-2 '>
        <div className='flex border pb-5 border-b-2 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
            <div className='flex flex-1 mt-2'>
                <div className='font-bold text-xl mr-2'>Treatment Calender</div>
            </div>
            <div className='flex p-2 h-10 rounded-lg bg-indigo-100'>
                <div><CalendarIcon className='h-6 pr-2 ' /></div>
                <div><CalendarPicker selectedDate={selectedDate} setSelectedDate={setSelectedDate}/></div>
            </div>
        </div>
        <div className='flex mt-2 pb-1 border-b-2 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
            <CalenderView selectedDate={selectedDate} setSelectedDate={setSelectedDate} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
        </div>
    </div>;
}

export default TreatmentCalender;
