import React from 'react';
import {SearchIcon, ChevronDownIcon , CalendarIcon} from '@heroicons/react/solid';

const Searchbar: React.FC = () => {
    return <div className='flex pt-5'>
        <div className='flex flex-1 bg-white m-2 rounded-lg p-2 mr-5'>
            <div className='flex flex-1 border-r-2 border-r-gray-200'>
                <SearchIcon className='h-6 pr-2 text-indigo-900'/>
                <input placeholder='Search doctor...' className='outline-0'/>
            </div>
            <div className='flex text-indigo-900'>
                <ChevronDownIcon className='h-6 pr-2 '/>
                <span className='font-bold'>{"All Specialists"}</span>
            </div>
        </div>

        <div className='flex bg-white m-2 mr-5 rounded-lg p-2 text-indigo-900 '>
            <span><CalendarIcon className='h-6 pr-2 '/></span>
            <span>{"14:03 PM Today 24 Mar 2020"}</span>
        </div>
    </div>;
}

export default Searchbar;
