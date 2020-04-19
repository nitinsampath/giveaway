import React from 'react';
import ReactDOM from 'react-dom';
import Raffle from './Raffle';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Raffle/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
