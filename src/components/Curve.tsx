import { } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, Area, Tooltip, ComposedChart, Line} from 'recharts';
import { game } from '../core';

const Curve: React.FC = () => {
  const [epidemicState, setEpidemicState] = useState([{
    name: `Tag 0`,
    infected: 0,
    recovered: 0,
    dead: 0,
    capacity: 0
  }]);

  useEffect(() => {
    console.log("addEventlistener");
    game.addStateListener(() => {
      const mappedEpidemicState = game.epidemicStates.map((epidemicState, index) => {
        return {
          name: `Tag ${index + 1}`,
          infected: epidemicState.infected,
          recovered: epidemicState.recovered,
          dead: epidemicState.dead,
          capacity: epidemicState.healthcareSystemCapacity
        };
      })
      setEpidemicState(mappedEpidemicState);
    });
  }, [])

  console.log("EpidState: ", epidemicState);

  const currentCapacity = epidemicState && epidemicState.length > 0 && epidemicState[epidemicState.length - 1].capacity || 0;
  const currentImpacted = epidemicState && epidemicState.length > 0 && epidemicState[epidemicState.length - 1].infected + epidemicState[epidemicState.length - 1].recovered + epidemicState[epidemicState.length - 1].dead || 0;

  return (
    <div className="full-width">
        <ResponsiveContainer height='100%' width='100%'>
          <ComposedChart
            data={epidemicState}
            margin={{
              left: -2,
              top: 10,
            }}
          >
            <Tooltip />
            <Area isAnimationActive={false} type="monotone" dataKey="infected" stackId="1" stroke="#f53d3d" fill="#f53d3d" />
            <Area isAnimationActive={false} type="monotone" dataKey="recovered" stackId="1" stroke="#4db374" fill="#4db374" />
            <Area isAnimationActive={false} type="monotone" dataKey="dead" stackId="1" stroke="#3b1111" fill="#3b1111" />
            {currentCapacity && (currentImpacted * 8 >= currentCapacity) && 
              <Line isAnimationActive={false} dataKey="capacity" type="monotone" stroke="black" strokeDasharray="3 3" dot={false} />
            }
          </ComposedChart>
        </ResponsiveContainer>
    </div>
  );
};

export default Curve;
