import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

type curveType = {
  name: string;
  score: number;
}

type reportType = {
  data : curveType[] ;
}

const RadialGraphCurve: React.FC<reportType> = ({data}) => {
  let xAxisParamName = (data.length > 0) ? Object.keys(data[0])[0] : "";
  return <div>
    {(data.length > 0) ?
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
      }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey={xAxisParamName} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="score" stroke="#FFA000" fill="#ffedd5" />
      </BarChart>
    </ResponsiveContainer>
    :""}
  </div>;
}

export default RadialGraphCurve;
