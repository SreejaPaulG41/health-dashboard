import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    dayName:"",
    score: 0,
  },
  {
    dayName: "Mon",
    score: 6,
  },
  {
    dayName: "Tue",
    score: 3,
  },
  {
    dayName: "Wed",
    score: 18,
  },
  {
    dayName: "Thu",
    score: 12,
  },
  {
    dayName: "Fri",
    score: 14,
  },
  {
    dayName: "Sat",
    score: 5,
  },
  {
    dayName: "Sun",
    score: 0,
  }
];

const GraphCurve : React.FC = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis dataKey="dayName" />
          <YAxis />
          <Tooltip/>
          <Area type="monotone" dataKey="score" stroke="#FFA000" fill="#ffedd5" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
export default GraphCurve;