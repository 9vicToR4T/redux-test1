import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import  rootReducers  from './components/Redux/rootReducers.js';
import ReduxThunk from 'redux-thunk';


const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const loggerMilddleware = (store) => next => action =>{
  const result = next(action)
  console.log("Middleware", store.getState())
  return result
}

const store = createStore(rootReducers, composeEnhancers( applyMiddleware(
  loggerMilddleware,
  ReduxThunk
       )));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
