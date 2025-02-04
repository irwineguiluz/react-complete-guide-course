import { useState } from 'react';

import { isEmail } from '../util/validation.js';

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });
  const isEmailInvalid = didEdit.email && !isEmail(enteredValues.email);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  function handleInputBlur(identifier) {
    setDidEdit(prevDidEdit => ({
      ...prevDidEdit,
      [identifier]: true,
    }));
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevEnteredValues) => ({
      ...prevEnteredValues,
      [identifier]: value,
    }));
    setDidEdit(prevDidEdit => ({
      ...prevDidEdit,
      [identifier]: false,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={enteredValues.email}
            onBlur={() => handleInputBlur('email')}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          <div className="control-error">
            {isEmailInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValues.password}
            onBlur={() => handleInputBlur('password')}
            onChange={(e) => handleInputChange('password', e.target.value)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
