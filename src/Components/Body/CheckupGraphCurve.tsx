import React from 'react';
import { RadialBarChart, RadialBar, Tooltip } from "recharts";

type checkupCountType = {
    specialist: string;
    visitCount: number;
    fill: string;
    bgColor: string;
}
interface checkupCount {
    data: checkupCountType[];
}
const style = {
    top: 0,
    left: 132,
    lineHeight: "20px"
};

const CheckupGraphCurve: React.FC<checkupCount> = ({ data }) => {
    data.sort(function (a: checkupCountType, b: checkupCountType): number {
        return a.visitCount - b.visitCount;
    })
    
    return (
        <div className='flex'>
            <div className='w-32'>
            <RadialBarChart
                width={200}
                height={100}
                cx={50}
                cy={50}
                innerRadius={20}
                outerRadius={54}
                startAngle={10}
                endAngle={320}
                barSize={20}
                data={data}
            >
                <RadialBar
                    background
                    dataKey="visitCount"
                />
                <Tooltip />
            </RadialBarChart>
            </div>
            <div>
                {
                    data.map((item: checkupCountType)=>
                    <div className='flex'>
                        <div className={'h-2 w-2 m-1 mt-2 rounded-lg bg-'+item.bgColor}></div>
                        <div>{item.specialist}</div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default CheckupGraphCurve