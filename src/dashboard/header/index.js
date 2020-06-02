import React from 'react';
import style from './style.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from './../../redux/actions';

const Header = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const logout = () => dispatch({ type: LOGOUT });

  return (<div className={style.header}>
    <div className={style.data}>
      {user.firstName} {user.lastName} <br />
      {user.email} <br />
      <a href="#" onClick={logout}> Logout </a>
    </div>
    <div className={style.img}>
      <img src={user.profilePictureUrl} />
    </div>
  </div>);
};

export default Header;