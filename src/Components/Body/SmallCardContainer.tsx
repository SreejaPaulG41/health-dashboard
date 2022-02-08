import React from 'react';
import SmallCard from './SmallCard';
import smallheart from '../../Images/smallheart.jpg';
import heart from '../../Images/heart.jpg';
import smalltemp from '../../Images/smalltemp.png';
import temparture from '../../Images/temparature.jpg';
import checkup from '../../Images/checkup.jpg';

const SmallCardContainer: React.FC = () => {
    const testNames: string[] = ["Hear Rate", "Temparature"];
    const testValues: string[] = ["114 bpm", "36 c"];
    const iconImages: string[] = [smallheart, smalltemp];
    const images: string[] = [heart, temparture];
    const checkupOccup: string[] = ["Cardiologist", "Psycologist", "Therapist", "Dantist"];

    return <div className='flex'>
        <div className='flex flex-none p-2 m-1 mt-3 rounded-lg'>
            {
                testNames.map((item: string, index: number) => <SmallCard key={index} name={item} value={testValues[index]} iconImage={iconImages[index]} image={images[index]} />)
            }
        </div>
        <div className='flex-1 p-2 m-1 mt-5 mb-3 mr-5 bg-white rounded-lg h-40'>
            <div className='font-bold text-xl text-indigo-900 p-1'>Checkup</div>
            <div className='flex place-content-around'>
                <img src={checkup} alt="checkup" className='h-24 w-28 mt-2' />
                <div>
                    {
                        checkupOccup.map((item: string, index: number) =>
                            <div key={index} className='flex pb-3.5'>
                                {
                                    (item === "Cardiologist") ? <div className='h-2 w-2 rounded-full mr-2 bg-indigo-900'></div> :
                                        ((item === "Psycologist") ? <div className='h-2 w-2 rounded-full mr-2 bg-orange-400'></div> :
                                            ((item === "Therapist") ? <div className='h-2 w-2 rounded-full mr-2 bg-sky-400'></div> :
                                                ((item === "Dantist") ? <div className='h-2 w-2 rounded-full mr-2 bg-red-500'></div> : ""
                                                )))
                                }
                                <div className='text-gray-500 p-0.5 -mt-3'>
                                    {item}
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    </div>;
}

export default SmallCardContainer;
