import React from 'react';
import image from '../../Images/ImageSquare.png';

const Logo : React.FC = ()=> {
  return <div className='w-40 h-20 bg-amber-500 m-2 mb-14 mr-0'>
      <div className='p-5 pl-16'>
        <img src={image} alt="logo"/>
      </div>
  </div>;
}

export default Logo;
