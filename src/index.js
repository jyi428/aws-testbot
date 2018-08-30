import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import config from './aws-exports' // new
import Amplify from 'aws-amplify' // new
Amplify.configure(config) // new

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
