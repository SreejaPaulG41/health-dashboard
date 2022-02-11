import React from 'react';
import SmallCard from './SmallCard';
import smallheart from '../../Images/smallheart.jpg';
import heart from '../../Images/heart.jpg';
import smalltemp from '../../Images/smalltemp.png';
import temparture from '../../Images/temparature.jpg';
import checkUpCount from '../../Data/Appointments/CheckupCount.json';
import vitals from '../../Data/StatisticsOfHealthGraphs/MinVitalsRes.json';
import CheckupGraphCurve from './CheckupGraphCurve';

const SmallCardContainer: React.FC = () => {
    const testNames: string[] = vitals.map((item)=>item.vitalName);
    const testValues: string[] = vitals.map((item)=>item.vitalValue);
    const iconImages: string[] = [smallheart, smalltemp];
    const images: string[] = [heart, temparture];

    return <div className='flex'>
        <div className='flex flex-none p-2 m-1 mt-3 rounded-lg'>
            {
                testNames.map((item: string, index: number) => <SmallCard key={index} name={item} value={testValues[index]} iconImage={iconImages[index]} image={images[index]} />)
            }
        </div>
        <div className='flex-1 p-2 m-1 mt-5 mb-3 mr-5 bg-white rounded-lg h-40'>
            <div className='font-bold text-xl text-indigo-900 p-1'>Checkup</div>
            <div className='flex place-content-around'>
                <CheckupGraphCurve data={checkUpCount}/>
            </div>
        </div>
    </div>;
}

export default SmallCardContainer;
