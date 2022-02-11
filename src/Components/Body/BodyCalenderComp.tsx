import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BodyCalenderComp: React.FC = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [date, setDateValChange] = useState(new Date());
    const calendarValChange = ()=>{
        setDateValChange(date);
        setShowCalendar(false);
    }
    useEffect(()=>{
        setShowCalendar(false);
    },[date]);
    return (
        <div>
            <input value={date.toLocaleDateString()} onFocus={()=>setShowCalendar(true)}/>
            <div className={showCalendar ? 'absolute inline-block' : 'hidden'}>
                <Calendar onChange={setDateValChange} value={date} view="month"/>
            </div>
        </div>
    );
}

export default BodyCalenderComp
