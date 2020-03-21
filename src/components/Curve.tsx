import { } from '@ionic/react';
import React from 'react';
import { ResponsiveContainer, AreaChart, Area, Tooltip, } from 'recharts';

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

const Curve: React.FC = () => {
  return (
    <div className="full-width">
        <ResponsiveContainer height='100%' width='100%'>
          <AreaChart
            data={data}
            margin={{
              left: -2,
            }}
          >
            <Tooltip />
            <Area isAnimationActive={false} type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area isAnimationActive={false} type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area isAnimationActive={false} type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
        </ResponsiveContainer>
    </div>
  );
};

export default Curve;
