import React, {useState, useMemo} from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

type curveType = {
  name: string;
  score: number;
}

type reportType = {
  data : curveType[] ;
}

const LineGraphCurve : React.FC<reportType> = ({data}) => {
  let xAxisParamName = (data.length > 0) ? Object.keys(data[0])[0] : "";
  return (
    <div>
      {(data.length > 0) ?
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
          <XAxis dataKey={xAxisParamName} />
          <YAxis />
          <Tooltip/>
          <Area type="monotone" dataKey="score" stroke="#FFA000" fill="#ffedd5" />
        </AreaChart>
      </ResponsiveContainer>
      :""}
    </div>
  );
}
export default LineGraphCurve;