import React from 'react';
interface tinyCardType{
    name: string;
    value: string;
    image: string;

}
const TinyCard: React.FC<tinyCardType> = ({name, value, image})=> {
  return <div className= {(name === "Blood") ? ' w-28 h-40 m-2 p-4 shadow-2xl rounded-lg text-indigo-900 text-center' : 'w-24 h-40 m-2 p-4 border border-gray-500 rounded-lg text-indigo-900 text-center'}>
      <div><img src={image} alt={name} className={(name === "Blood") ? 'm-3 ml-4' : 'm-3'}/></div>
      <div className={(name !== "Blood") ? 'text-gray-400' : ''}>{name}</div>
      <div className={(name==="Blood" ? "h-10 w-20 p-1 rounded-lg bg-red-400 text-white text-xl mt-2" : "text-xl")}>{value}</div>
  </div>;
}

export default TinyCard;
