import { useDispatch, useSelector } from 'react-redux';

import { counterActions } from '../store/index.js';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};

  function handleIncrement() {
    dispatch(counterActions.increment());
  }

  function handleIncrease() {
    dispatch(counterActions.increase(5));
  }

  function handleDecrement() {
    dispatch(counterActions.decrement());
  }

  function handleToggleCounter() {
    dispatch(counterActions.toggleCounter());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increase by 5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={handleToggleCounter}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   handleIncrement() {
//     this.props.increment();
//   }

//   handleDecrement() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.handleIncrement.bind(this)}>Increment</button>
//           <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchtoProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchtoProps)(Counter);
