import React from 'react';
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type curveType = {
  name: string;
  score: number;
}

type reportType = {
  data : curveType[] ;
}

const PieGraphCurve: React.FC<reportType> = ({data}) => {
  let names: string =  (data.length > 0) ? Object.keys(data[0])[0] : "";
  return <div>
    {(data.length > 0) ?
    <ResponsiveContainer width="100%" aspect={3}>
      <PieChart width={730} height={250}>
        <Pie data={data} dataKey="score" nameKey={names} cx="50%" cy="50%" outerRadius={80} fill="#FFA000" label />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
    :""}
  </div>;
}

export default PieGraphCurve;
