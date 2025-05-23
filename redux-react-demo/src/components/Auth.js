import { useDispatch } from 'react-redux';

import { authActions } from '../store/auth.js';

import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();

  function handleLogin(e) {
    e.preventDefault();

    dispatch(authActions.setLogin());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleLogin}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={handleLogin}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
