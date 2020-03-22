import { } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, AreaChart, Area, Tooltip, } from 'recharts';
import { game } from '../core';

const Curve: React.FC = () => {
  const [epidemicState, setEpidemicState] = useState();

  useEffect(() => {
    console.log("addEventlistener");
    game.addStateListener(() => {
      const mappedEpidemicState = game.epidemicStates.map((epidemicState, index) => {
        return {
          name: `Tag ${index + 1}`,
          infected: epidemicState.infected,
          recovered: epidemicState.recovered,
          dead: epidemicState.dead,
        };
      })
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
            <Area isAnimationActive={false} type="monotone" dataKey="infected" stackId="1" stroke="#f53d3d" fill="#f53d3d" />
            <Area isAnimationActive={false} type="monotone" dataKey="recovered" stackId="1" stroke="#4db374" fill="#4db374" />
            <Area isAnimationActive={false} type="monotone" dataKey="dead" stackId="1" stroke="#3b1111" fill="#3b1111" />
          </AreaChart>
        </ResponsiveContainer>
    </div>
  );
};

export default Curve;
