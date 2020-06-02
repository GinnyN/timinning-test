import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from './style.module.css';

const Login = ({ onLogin }) => {

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const validateForm = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    if(email.value.length === 0) {
      setErrorEmail(true);
    }
    if(password.value.length === 0) {
      setErrorPassword(true);
    }
    if(password.value.length > 0 && email.value.length > 0) {
      setErrorEmail(false);
      setErrorPassword(false);
      onLogin(email.value, password.value);
    }
  };

  return (<div className={styles.login}>
    <div className={styles.form}>
      <h1> Login </h1>
      <div>
      <Form onSubmit={validateForm} noValidate>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" name="email" isInvalid={errorEmail} placeholder="Enter email" />
          <Form.Control.Feedback type="invalid">Campo Obligatorio</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" isInvalid={errorPassword} />
          <Form.Control.Feedback type="invalid">Campo Obligatorio</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </div>
  </div>);
}

export default Login;
