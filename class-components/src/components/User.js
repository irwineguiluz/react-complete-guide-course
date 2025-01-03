import { Component } from 'react';
import classes from './User.module.css';

class User extends Component {
  componentWillUnmount() {
    console.log('this component is unmounted!')
  }

  render() {
    return (
      <li className={classes.user}>{this.props.name}</li>
    );
  }
}

export default User;
