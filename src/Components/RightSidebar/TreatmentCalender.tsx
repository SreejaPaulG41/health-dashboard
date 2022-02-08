import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { CalendarIcon } from '@heroicons/react/outline';

interface typeOfAppointment {
    Tue: string[];
    Wed: string[];
    Fri: string[];
    Sun: string[];
}
const TreatmentCalender: React.FC = () => {
    const days: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const dates: number[] = [23, 24, 25, 26, 27, 28, 29];
    const typeOfAppointements: typeOfAppointment = {
        Tue: ["white", "white"],
        Wed: ['red-500', "sky-400", "orange-400"],
        Fri: ["red-500"],
        Sun: ["red-500"]
    };

    return <div className='p-5 text-indigo-900 mt-2 '>
        <div className='flex border pb-5 border-b-2 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
            <div className='flex flex-1 mt-2'>
                <div className='font-bold text-xl mr-2'>Treatment Calender</div>
                <div><ChevronLeftIcon className='h-7 pr-2 ' /></div>
                <div><ChevronRightIcon className='h-7 pr-2 ' /></div>
            </div>
            <div className='flex p-2 rounded-lg bg-indigo-100'>
                <div><CalendarIcon className='h-6 pr-2 ' /></div>
                <div>March</div>
            </div>
        </div>
        <div className='flex mt-2 pb-1 border-b-2 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
            {days.map((item: string, index: number) =>
                <div key={index} className={(item === "Tue") ? 'w-14 h-28 mr-1 -ml-2 bg-orange-400 rounded-2xl text-white ' : 'w-20 h-28 mr-2 ml-1'}>
                    <div className={(item === "Tue") ? 'text-md text-white p-2' : 'text-md text-gray-400 p-2'}>{item}</div>
                    <div className='p-2 pl-3 text-lg'>{dates[index]}</div>
                    <div >
                        <div className={(item === "Wed" || item === "Tue") ? 'flex pl-3' : 'flex pl-4'}>
                        {
                            (item === "Tue") ? <><div className='h-2 w-2 rounded-full mr-2 bg-white'></div> <div className='h-2 w-2 rounded-full mr-2 bg-white'></div></>:
                                ((item === "Wed") ? <><div className='h-2 w-2 rounded-full mr-2 bg-red-500'></div> <div className='h-2 w-2 rounded-full mr-2 bg-sky-400'></div> <div className='h-2 w-2 rounded-full mr-2 bg-orange-500'></div></>:
                                    ((item === "Fri" || item === "Sun") ? <div className='h-2 w-2 rounded-full mr-2 bg-red-500'></div> : ""
                                        ))
                        }
                        </div>
                    </div>
                </div>)
            }
        </div>
    </div>;
}

export default TreatmentCalender;
