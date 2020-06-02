import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';

import { LOGIN } from './redux/actions';

import loginApi from './api/login';
import Login from './login/login';
import Dashboard from './dashboard';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const onLogin = (email, password) => {
    loginApi(email, password).then((results) => dispatch({ type: LOGIN, user: results.data }));
  };

  return (
      <div className="App">
        { user.id ? <Dashboard /> : <Login onLogin={onLogin} /> }
      </div>
  );
}

export default App;
