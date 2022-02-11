import React, {useState} from 'react';
import {SearchIcon , CalendarIcon} from '@heroicons/react/solid';
import doctorDetails from '../../Data/DoctorsDetails.json';
import BodyCalenderComp from './BodyCalenderComp';

type doctorObj = {
    dept: string;
    name: string[];
}
const Searchbar: React.FC = () => {
    const [deptName, setDeptName] = useState<string>(doctorDetails[0].dept);

    const handleDeptChange: (e : React.ChangeEvent<HTMLSelectElement>) => void = (e) =>{
        setDeptName(e.target.value);
    }
    return <div className='flex pt-5'>
        <div className='flex flex-1 bg-white m-2 rounded-lg p-2 mr-5'>
            <div className='flex flex-1 border-r-2 border-r-gray-200'>
                <SearchIcon className='h-6 pr-2 text-indigo-900'/>
                <input placeholder='Search doctor...' className='outline-0'/>
            </div>
            <div className='flex text-indigo-900'>
                <select value={deptName} onChange={(e) => handleDeptChange(e)}>
                    {
                        doctorDetails.map((item : doctorObj, index:number)=><option key={index} value={item.dept}>{item.dept}</option>)
                    }
                </select>
            </div>
        </div>

        <div className='flex bg-white m-2 mr-5 rounded-lg p-2 text-indigo-900 '>
            {/* <span><CalendarIcon className='h-6 pr-2 '/></span>
            <span>{"14:03 PM Today 24 Mar 2020"}</span> */}
            <BodyCalenderComp/>
        </div>
    </div>;
}

export default Searchbar;
