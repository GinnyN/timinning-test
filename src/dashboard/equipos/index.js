import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import style from './style.module.scss';

const Equipos = () => {
  const [equiposList, setEquiposList] = useState({});
  const websocket = useRef(null);
  const devices = useSelector(state => state.devices);

  useEffect(() => {
    websocket.current = new WebSocket('wss://frontend-excercise.dt.timlabtesting.com/eventstream/connect');
  }, []);

  useEffect(() => {
    websocket.current.onmessage = (event) => {
      const [tempE, tempV] = event.data.split('|');
      const temp = { ...equiposList };
      if(temp[tempE]){
        temp[tempE].push(tempV);
      } else {
        temp[tempE] = [tempV];
      }
      setEquiposList(temp);
    };
  }, [equiposList]);

  return (<div className={style.status}>
    {Object.keys(devices).map((it) => devices[it] && <div className={style.statusDevice}>
      -> {it} <br />
      {equiposList[it] && [...equiposList[it]].reverse().map((lb) => <p>* {lb} </p>)}
    </div>)}
  </div>);
}

export default Equipos;