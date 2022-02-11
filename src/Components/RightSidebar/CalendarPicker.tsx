import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface calenderPickerType{
    selectedDate: Date;
    setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

const CalendarPicker: React.FC<calenderPickerType> = ({selectedDate, setSelectedDate}) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [date, setDateValChange] = useState(new Date());
    
    useEffect(()=>{
        setShowCalendar(false);
        setSelectedDate(date);
    },[date]);

    return (
        <div>
            <input value={date.toLocaleString('default', { month: 'long' })} onFocus={()=>setShowCalendar(true)} className='bg-indigo-100'/>
            <div className={showCalendar ? 'absolute inline-block -ml-96 z-50' : 'hidden'}>
                <Calendar onChange={setDateValChange} value={date}/>
            </div>
        </div>
    );
}

export default CalendarPicker;
