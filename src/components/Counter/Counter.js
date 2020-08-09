import React, { Component } from 'react';
import cl from './Counter.module.css';
import { connect } from 'react-redux';
import CounterTwo from './CounterTwo/CounterTwo';
import { add, minus } from '../Redux/ActionCreator/actions';

export class Counter extends Component {
  render() {
    return (
      <div className={cl.Counter}>
        <div className={cl.wrapp}>
          <h2>Counter One</h2>
          <span>{this.props.counter}</span>
          <hr />
          <button onClick={this.props.onAdd}>Plus</button>
          <button onClick={this.props.onMin}>Minus</button>
        </div>
        
        <CounterTwo />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.reducerOne.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onMin: () => dispatch(minus()),
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
