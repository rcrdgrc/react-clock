import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Clock from './Clock';

function Time() {
  return <div className="App-header">
        <h1>Welcome Sir</h1>
        <h2>The time is {<span style={{ color: "green" }}>{new Date().toLocaleTimeString()}</span>}</h2>
      </div>
}
// setInterval(time, 1000)

ReactDOM.render(
  <>
  {/* <Time/> */}
<Clock/>
</>,
document.getElementById('root'));
serviceWorker.unregister();
