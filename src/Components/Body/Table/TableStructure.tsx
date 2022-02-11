import React, { useState, useEffect } from 'react';
import image from '../../../Images/ImageSquare.png';
import { CheckIcon, ClockIcon, DotsHorizontalIcon, SwitchVerticalIcon, AdjustmentsIcon } from '@heroicons/react/solid';

type clmType = {
    Header: string;
}

interface tableData{
    name: string;
    specialist: string;
    date: string;
    time: string;
    status: string;
    settings: boolean;
}
interface tableStructure{
    COLUMNS: clmType[];
    tableData: tableData[];
    nameSort: ()=>void;
    SpecializationSort: ()=>void;
    dateSort: ()=>void;
}
const TableStructure: React.FC<tableStructure> = ({COLUMNS, tableData, nameSort, SpecializationSort, dateSort})=> {
    const sortTable = (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        let item = e.target as Element;
        if(item.id === "Name"){
            nameSort();
        }
        switch (item.id){
            case "Name":
                nameSort();
                break;
            case "Specialist":
                SpecializationSort();
                break;
            case "Date":
                dateSort();
                break;
            case "Time":
                dateSort();
                break;
            default:
                nameSort();
                break;
        
        }
    }

  return (
    <div className='border-b border-gray-500'>
    
    <table className='m-5 p-5 text-indigo-900'>
      <thead>
        <tr>
          {COLUMNS.map((item, index) =>
            <th key={index} className='w-32 p-4 pl-1'>
              {item.Header === "Settings" ? <AdjustmentsIcon className='h-6 pr-2 text-indigo-900' /> : <div id={item.Header} className='flex' onClick={(e)=>sortTable(e)}>{item.Header} <SwitchVerticalIcon className='h-6 pr-2' /></div>}
            </th>)}
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) =>
          <tr key={index} id={index.toString()} className="text-indigo-900 bg-white">
            <td className='w-32 p-3 h-10'>
              <div className='flex space-x-3'>
                <div className='rounded-lg bg-orange-400 h-8 w-8'><img src={image} alt="img" /></div>
                <div>{item.name}</div>
              </div>
            </td>
            <td className='w-32'>{item.specialist}</td>
            <td className='w-32'>{item.date}</td>
            <td className='w-32'>{item.time}</td>
            <td className='w-32 text-center'>{(item.status === "Not Done")? <CheckIcon className='h-6 pr-2 text-blue-400'/> : <ClockIcon className='h-6 pr-2 text-red-500'/>}</td>
            <td className='w-32'>{item.settings ? <DotsHorizontalIcon className='h-6 pr-2 text-gray-400'/> : ""}</td>
          </tr>)}
      </tbody>
    </table>

  </div>
  )
}

export default TableStructure