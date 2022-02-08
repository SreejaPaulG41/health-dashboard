import React from 'react';
import GraphCurve from './GraphCurve';
import { ChartBarIcon, ChevronDownIcon } from '@heroicons/react/solid'
import {ChartSquareBarIcon, ChartPieIcon} from '@heroicons/react/outline';

const GraphContainer: React.FC = () => {
    return <div className='bg-white p-2 m-2 mr-5 mt-5 rounded-lg'>
        <div className='flex justify-between '>
            <div className='text-indigo-900 '>{"Statistics Of Your Health"}</div>
            <div className='flex p-1 border border-gray-400 rounded-lg '>
                <ChartBarIcon className='h-6 pr-2 text-white bg-indigo-900 rounded-lg' />
                <ChartSquareBarIcon className='h-6 pr-2 text-gray-500 ' />
                <ChartPieIcon className='h-6 pr-2 text-gray-500 ' />
            </div>
            <div className='flex'>
                <span>Show</span>
                <span className='text-indigo-900 pl-2 '>by Week</span>
                <ChevronDownIcon className='h-6 pr-2 text-indigo-900 ' />
            </div>
        </div>
        <GraphCurve />
    </div>;
}

export default GraphContainer;
