import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignupForm = () => {
  const [values, setValues] = useState({
    emailAddress: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const history = useHistory();

  // 'data' is an object where the keys are the names of the form fields,
  // and the values are the form input values
  // eslint-disable-next-line no-unused-vars
  const onSubmit = (e) => {
    e.preventDefault();
    fetch('/user/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        // Enter something that stores or handles cookies or JWT
        history.push('/');
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log('Auth Form won\'t fetch, error:', err));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    const valuesCopy = { ...values };
    valuesCopy[name] = value;
    setValues(valuesCopy);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="firstname" id="firstname" name="firstName" value={values.firstName} onChange={handleChange} />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="lastname" id="lastname" name="lastName" value={values.lastName} onChange={handleChange} />
      </div>

      <div className="form-group">
        <input type="email" className="form-control" placeholder="email" id="email" name="emailAddress" value={values.emailAddress} onChange={handleChange} />
      </div>

      <div className="form-group">
        <input type="password" className="form-control" placeholder="password" id="password" name="password" value={values.password} onChange={handleChange} />
      </div>

      <div className="form-group">
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </div>
    </form>
  );
};

export default SignupForm;
