import React, { Component } from 'react';
import cl from './CounterTwo.module.css';
import { connect } from 'react-redux';
import { adun, asyncAdd } from '../../Redux/ActionCreator/actions';

export class CounterTwo extends Component {
  render() {
    return (
      <div className={cl.CounterTwo}>
        <div className={cl.wrapp}>
          <h2>Counter Two</h2>
          <span>{this.props.counter2}</span>
          <hr />
          <button onClick={() => this.props.onAdd2(2)}>Plus</button>
          <button onClick={() => this.props.onAdd2(-4)}>Minus</button>
          <div>
            <button onClick={() => this.props.onAsyncAdd(100)}>Async add 100</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter2: state.reducerTwo.counter2,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd2: (number) => dispatch(adun(number)),
    onAsyncAdd: (number) => dispatch(asyncAdd(number)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterTwo);
