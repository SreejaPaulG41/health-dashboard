import React, { useState, useEffect } from 'react';
import LineGraphCurve from './StatisticsGraphs/LineGraphCurve';
import linearGraph from '../../Images/linear.png';
import barGraph from '../../Images/bar.png';
import pieGraph from '../../Images/pie.png';
import weeklyData from '../../Data/StatisticsOfHealthGraphs/WeeklyData.json';
import monthlyData from '../../Data/StatisticsOfHealthGraphs/MonthlyData.json';
import RadialGraphCurve from './StatisticsGraphs/RadialGraphCurve';
import PieGraphCurve from './StatisticsGraphs/PieGraphCurve';

type reportScoreType = {
    name: string;
    score: number;
}


const GraphContainer: React.FC = () => {
    const [timeVal, setTimeVal] = useState<string>("By Week");
    const [reportScore, setReportScore] = useState<reportScoreType[]>([]);
    const [garphTypeShow, setGraphTypeShow] = useState("linear-graph");

    const timeSpan: string[] = ["By Week", "By Month"];
    const clickedClassName: string = 'h-6 w-8 pl-2 pr-2 rounded-lg cursor-pointer bg-indigo-900';
    const nonClickedClassName: string = 'h-6 w-8 pl-2 pr-2 rounded-lg cursor-pointer bg-gray-200'
    const handleTimeSpanChnage: (e: React.ChangeEvent<HTMLSelectElement>) => void = (e) => {
        setTimeVal(e.target.value);
    }

    const handleGraphShow: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        let item = e.target as Element;
        let itemId: string = item.id;
        switch (itemId) {
            case "linear-graph":
                setGraphTypeShow("linear-graph");
                break;
            case "bar-graph":
                setGraphTypeShow("bar-graph");
                break;
            case "pie-graph":
                setGraphTypeShow("pie-graph");
                break;
            default:
                setGraphTypeShow("linear-graph");
                break;
        }
    }

    useEffect(() => {
        switch (timeVal) {
            case "By Week":
                setReportScore(weeklyData);
                break;
            case "By Month":
                setReportScore(monthlyData);
                break;
            default:
                setReportScore(weeklyData);
                break;
        }
    }, [timeVal]);

    return <div className='bg-white p-2 m-2 mr-5 mt-3 rounded-lg'>
        <div className='flex justify-between '>
            <div className='text-indigo-900 font-bold text-lg'>{"Statistics Of Your Health"}</div>
            <div className='flex p-0.5 -ml-10 m-1 border border-gray-400 rounded-lg bg-gray-200' onClick={(e) => handleGraphShow(e)}>
                <img src={linearGraph} alt="linear" className={(garphTypeShow === "linear-graph") ? clickedClassName : nonClickedClassName} id="linear-graph" />
                <img src={barGraph} alt="bar" className={(garphTypeShow === "bar-graph") ? clickedClassName : nonClickedClassName} id="bar-graph" />
                <img src={pieGraph} alt="pie" className={(garphTypeShow === "pie-graph") ? clickedClassName : nonClickedClassName} id="pie-graph" />
            </div>
            <div className='flex'>
                <span>Show</span>
                <span className='text-indigo-900 pl-2 '>
                    <select value={timeVal} onChange={(e) => handleTimeSpanChnage(e)}>
                        {
                            timeSpan.map((item: string, index: number) => <option key={index} value={item}>{item}</option>)
                        }
                    </select>
                </span>
            </div>
        </div>
        {
            (garphTypeShow === "bar-graph") ? <RadialGraphCurve data={reportScore} /> : ((garphTypeShow === "pie-graph") ? <PieGraphCurve data={reportScore} /> : <LineGraphCurve data={reportScore} />)
        }
    </div>;
}

export default GraphContainer;
