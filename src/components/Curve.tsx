import { } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, Area, Tooltip, ComposedChart, Line} from 'recharts';
import { game } from '../core';

interface DataPoint {
  name: string;
  infected?: number;
  recovered?: number;
  dead?: number;
  capacity?: number;
  forecast?: number;
}

const Curve: React.FC = () => {
  const [epidemicState, setEpidemicState] = useState<DataPoint[]>([]);

  useEffect(() => {
    console.log("addEventlistener");
    game.addStateListener(() => {
      const mappedEpidemicState: DataPoint[] = game.epidemicStates.map((epidemicState, index) => {
        return {
          name: `Tag ${index + 1}`,
          infected: epidemicState.infected,
          recovered: epidemicState.recovered,
          dead: epidemicState.dead,
          capacity: epidemicState.healthcareSystemCapacity
        };
      })
      mappedEpidemicState[mappedEpidemicState.length - 1]["forecast"] = mappedEpidemicState[mappedEpidemicState.length - 1].infected;

      var day = mappedEpidemicState.length;
      for (const forecast of game.infectedForecasts) {
        mappedEpidemicState.push({
          name: `Tag ${day + 1}`,
          forecast: forecast
        })
      }

      setEpidemicState(mappedEpidemicState);
    });
  }, [])

  console.log("EpidState: ", epidemicState);

  return (
    <div className="full-width">
        <ResponsiveContainer height='100%' width='100%'>
          <ComposedChart
            data={epidemicState}
            margin={{
              left: -2,
            }}
          >
            <Tooltip />
            <Area isAnimationActive={false} type="monotone" dataKey="infected" stackId="1" stroke="#f53d3d" fill="#f53d3d" />
            <Area isAnimationActive={false} type="monotone" dataKey="recovered" stackId="1" stroke="#4db374" fill="#4db374" />
            <Area isAnimationActive={false} type="monotone" dataKey="dead" stackId="1" stroke="#3b1111" fill="#3b1111" />
            <Line isAnimationActive={false} type="monotone" dataKey="capacity" stroke="#000000" strokeDasharray="3" dot={false}/>
            <Line isAnimationActive={false} type="monotone" dataKey="forecast" stroke="#00ff00" strokeWidth="5" dot={false}/>
          </ComposedChart>
        </ResponsiveContainer>
    </div>
  );
};

export default Curve;
