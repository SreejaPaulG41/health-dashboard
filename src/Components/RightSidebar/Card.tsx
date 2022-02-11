import React, {useState, useEffect} from 'react';
import cardscan from '../../Images/cardscan.png';
import image from '../../Images/ImageSquare.png';
import personalInfo from '../../Data/PersonalInformation.json';
import { isConstructorDeclaration } from 'typescript';

const Card: React.FC = ()=> {
  const [name, setName] = useState<string>("Laurent Aushy");
  const [cardNo, setCardNo] = useState<string>("1234 1234 1234 1424");
  const [expDate, setExpDate] = useState<string>("24/03");  

  const no = cardNo.substring(cardNo.length-4, cardNo.length);

  return <div className='h-48 w-96 p-2 text-white'>
      <div className='h-full w-full bg-orange-400 rounded-2xl'>
      <div>
          <div><img src={cardscan} alt="cardscan" className='absolute mt-4 ml-5'/></div>
          <div className='absolute h-10 w-10 p-2 ml-72 mt-4 bg-indigo-900 z-50'><img src={image} alt="profile"/></div>
      </div>

          <div className='absolute h-36 w-36 ml-56 rounded-bl-full bg-orange-200 opacity-50 z-0'></div>
          <div className='absolute h-20 w-28 mt-24 ml-64 rounded-tl-full bg-orange-100 opacity-50 '></div>
          <div className='absolute w-80 mt-20 flex justify-between text-lg font-semibold'>
              <div className='ml-10'>****</div>
              <div>****</div>
              <div>****</div>
              <div>{no}</div>
          </div>
          <div className='absolute w-80 mt-32 flex justify-between text-lg font-semibold'>
            <div className='ml-8'>{name}</div>
            <div >{expDate}</div>
          </div>
      </div>
  </div>;
}

export default Card;
