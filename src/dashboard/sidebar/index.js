import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SHOW } from './../../redux/actions';
import style from './style.module.scss';

import { FormCheck } from 'react-bootstrap';

import { list } from './../../api/equipos';

const Sidebar = () => {
  const [equipos, setEquipos] = useState([]);

  const dispatch = useDispatch();
  const devices = useSelector(state => state.devices);

  useEffect(() => {
    list().then((results) => setEquipos(results.data.devices));
  }, []);

  return (<div className={style.sidebar}>{
    equipos && equipos.map((equipo) => <div className={style.item}>
      <FormCheck label={equipo} key={equipo} checked={devices[equipo]} onChange={() => dispatch({ type: SHOW, name: equipo })}/>
    </div> )
  }</div>);
};

export default Sidebar;
