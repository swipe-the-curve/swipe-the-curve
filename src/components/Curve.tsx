import { } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, Area, Tooltip, ComposedChart, Line, Legend} from 'recharts';
import { game } from '../core';

const Curve: React.FC = () => {
  const [epidemicState, setEpidemicState] = useState([{
    name: `Tag 0`,
    Infiziert: 0,
    Genesen: 0,
    Tot: 0,
    Kapazität: 0
  }]);

  useEffect(() => {
    console.log("addEventlistener");
    game.addStateListener(() => {
      const mappedEpidemicState = game.epidemicStates.map((epidemicState, index) => {
        return {
          name: `Tag ${index + 1}`,
          Infiziert: epidemicState.infected,
          Genesen: epidemicState.recovered,
          Tot: epidemicState.dead,
          Kapazität: epidemicState.healthcareSystemCapacity
        };
      })
      setEpidemicState(mappedEpidemicState);
    });
  }, [])

  console.log("EpidState: ", epidemicState);

  const currentCapacity = epidemicState && epidemicState.length > 0 && epidemicState[epidemicState.length - 1].Kapazität || 0;
  const currentImpacted = epidemicState && epidemicState.length > 0 && epidemicState[epidemicState.length - 1].Infiziert + epidemicState[epidemicState.length - 1].Genesen + epidemicState[epidemicState.length - 1].Tot || 0;
  const currentDead = epidemicState && epidemicState.length > 0 && epidemicState[epidemicState.length - 1].Tot || 0;

  return (
    <div className="pos full-width full-height">
      <ResponsiveContainer height='100%' width='100%'>
        <ComposedChart
          data={epidemicState}
          margin={{
            left: -2,
            top: 10,
          }}
        >
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
          <Area isAnimationActive={false} type="monotone" dataKey="Infiziert" stackId="1" stroke="#f53d3d" fill="#f53d3d" />
          <Area isAnimationActive={false} type="monotone" dataKey="Genesen" stackId="1" stroke="#4db374" fill="#4db374" />
          {currentCapacity && (currentImpacted * 8 >= currentCapacity) && 
            <Line isAnimationActive={false} dataKey="Kapazität" type="monotone" stroke="black" strokeDasharray="3 3" dot={false} />
          }
        </ComposedChart>
      </ResponsiveContainer>
      <div className="tote">Tote: {currentDead}</div>
    </div>
  );
};

export default Curve;
