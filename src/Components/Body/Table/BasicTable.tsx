import React, { useState, useEffect } from 'react';
import Data from '../../../Data/Appointments/AppointmentsDetails.json';
import { COLUMNS } from './TableClm';
import image from '../../../Images/ImageSquare.png';
import { CheckIcon, ClockIcon, DotsHorizontalIcon, SwitchVerticalIcon, AdjustmentsIcon } from '@heroicons/react/solid';
import TableStructure from './TableStructure';

interface tableProps {
  currentPage: number;
  maxRow: number;
}
interface tableData {
  name: string;
  specialist: string;
  date: string;
  time: string;
  status: string;
  settings: boolean;
}

const BasicTable: React.FC<tableProps> = ({ currentPage, maxRow }) => {
  const [tableData, setTableData] = useState<tableData[]>([]);
  const [selectedRow, setSelectedRow] = useState<string>("");

  useEffect(() => {
    const higherValue = ((currentPage + 1) - 1) * maxRow;
    const startValue = higherValue - maxRow;
    const tableToShow = Data.slice(startValue, higherValue);
    setTableData(tableToShow);
  }, [currentPage, maxRow]);

  const rowClickCheck: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
    let item = e.target as Element;
    setSelectedRow(item.id);
    console.log(item)
  }

  const asecSort: (firstEle:string, secondEle:string)=>number = (firstEle:string, secondEle:string)=>{
    if (firstEle < secondEle) {
      return -1;
    }
    if (firstEle > secondEle) {
      return 1;
    }
    return 0;
  }

  const descSort: (firstEle:string, secondEle:string)=>number = (firstEle:string, secondEle:string)=>{
    if (firstEle > secondEle) {
      return -1;
    }
    if (firstEle < secondEle) {
      return 1;
    }
    return 0;
  }
  
  const nameSort = () => {
    const copyTableData = [...tableData];
    copyTableData.sort(function (a: tableData, b: tableData): number {
      let firstName = a.name.toLowerCase();
      let secondName = b.name.toLowerCase();
      return asecSort(firstName, secondName);
    })
    setTableData(copyTableData)
  }

  const SpecializationSort = () => {
    const copyTableData = [...tableData];
    copyTableData.sort(function (a: tableData, b: tableData): number {
      let firstspecialist = a.specialist.toLowerCase();
      let secondspecialist = b.specialist.toLowerCase();
      return asecSort(firstspecialist, secondspecialist);
    })
    setTableData(copyTableData)
  }

  const dateSort = ()=>{
    const copyTableData = [...tableData];
    copyTableData.sort(function (a: tableData, b: tableData): number {
      return new Date(a.date).valueOf() - new Date(b.date).valueOf();
    
    })
    setTableData(copyTableData)
  }

  return <div className='border-b border-gray-500'>
    <TableStructure COLUMNS={COLUMNS} tableData={tableData} nameSort={nameSort} SpecializationSort={SpecializationSort} dateSort={dateSort}/>
  </div>;
}

export default BasicTable;
