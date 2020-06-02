import React, { useState, useEffect } from 'react';
import style from './style.module.scss';

import { performance } from './../../api/equipos';

import CanvasJSReact from './../../canvasjs-2.3.2/canvasjs.react';

const Body = () => {
  const [data, setData] = useState({
    title: {
      text: "Equipos Performance"
    },
    data: [
    {
      type: "column",
      dataPoints: []
    }
    ]
  });

  const callData = () => performance().then((results) => {
    const temp = { ...data };
    temp.data[0].dataPoints = results.data.devices.map((label, index) => ({ label, y: results.data.values[index]}) );
    setData(temp);
  });

  useEffect(() => {
    callData();
    const temp = setInterval(() => callData(), 5000);
    return () => {
      clearInterval(temp);
    };
  }, []);

  return (<div className={style.chart}> <CanvasJSReact.CanvasJSChart options={data} /></div>);
}

export default Body;