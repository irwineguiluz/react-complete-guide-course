import { useState } from 'react';

import { isEmail } from '../util/validation.js';
import Input from './Input.jsx';

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
  const isPasswordInvalid = didEdit.password && enteredValues.password.trim().length < 6;

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
        <Input
          label="Email"
          type="email"
          name="email"
          value={enteredValues.email}
          onBlur={() => handleInputBlur('email')}
          onChange={(e) => handleInputChange('email', e.target.value)}
          error={isEmailInvalid && 'Please enter a valid address.'}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={enteredValues.password}
          onBlur={() => handleInputBlur('password')}
          onChange={(e) => handleInputChange('password', e.target.value)}
          error={isPasswordInvalid && 'Please enter a valid password.'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
