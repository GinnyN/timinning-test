import React from 'react';
import style from './style.module.scss';

import Header from './header';
import Sidebar from './sidebar';
import Body from './body';
import Equipos from './equipos';

const dashboard = () => {
  return (
    <div className={style.dashboard}>
      <div className={style.header}><Header /></div>
      <div className={style.sidebar}><Sidebar /></div>
      <div className={style.equipos}><Equipos /> </div>
      <div className={style.body}><Body /> </div>
    </div>
  )
};

export default dashboard;
