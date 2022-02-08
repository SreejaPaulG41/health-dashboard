import React from 'react';

interface smallCardProps {
    name: string;
    value: string;
    iconImage: string;
    image: string;
}
const SmallCard: React.FC<smallCardProps> = ({ name, value, iconImage, image }) => {
    return <div className='mr-5 p-2 w-18 bg-white rounded-lg'>
        <div className='flex justify-between'>
            <img src={iconImage} alt="icon" />
            <span className='text-indigo-900'>{name}</span>
        </div>
        {(name === "Hear Rate") ? 
        <img src={image} alt="img" className='m-2 '/> : 
        <img src={image} alt="img" className='m-4'/>   }
        <span className='text-indigo-900 font-bold'>{value}</span>
    </div>;
}

export default SmallCard;
