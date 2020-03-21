import { } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, AreaChart, Area, Tooltip, } from 'recharts';
import { game } from '../core';
import { EpidemicState } from '../core/epidemicmodel';

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

const mapStates = (epidemicStates: EpidemicState[]) => {
  const mappedEpidemicState = epidemicStates.map(epidemicState => {
    const entry = {
      uv: epidemicState.infected,
      pv: epidemicState.recovered,
      amt: epidemicState.dead,
    };


    return entry;
  })
  return mappedEpidemicState;
}

const Curve: React.FC = () => {
  const [epidemicState, setEpidemicState] = useState(mapStates(game.epidemicStates));

  useEffect(() => {
    console.log("addEventlistener");
    game.addStateListener(() => {
      const mappedEpidemicState = mapStates(game.epidemicStates);
      setEpidemicState(mappedEpidemicState);
    });
  }, [])

  console.log("EpidState: ", epidemicState);

  return (
    <div className="full-width">
        <ResponsiveContainer height='100%' width='100%'>
          <AreaChart
            data={epidemicState}
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
