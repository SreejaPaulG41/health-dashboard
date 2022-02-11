import React from 'react';
interface tinyCardType{
    name: string;
    value: string;
    image: string;

}
const TinyCard: React.FC<tinyCardType> = ({name, value, image})=> {
  return <div className= {' active:w-28 active:h-40 active:m-2 active:p-4 active:shadow-2xl active:rounded-lg active:text-indigo-900 active:text-center w-24 h-36 m-2 p-4 border border-gray-500 rounded-lg text-indigo-900 text-center'}>
      <div><img src={image} alt={name} className={'active:m-3 active:ml-4 m-3'}/></div>
      <div className={'active:text-gray-400'}>{name}</div>
      <div className={ "font-bold text-xl"}>{value}</div>
  </div>;
}

export default TinyCard;
