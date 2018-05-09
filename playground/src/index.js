import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import appStore from './AppStore';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App store={appStore} />, document.getElementById('root'));
registerServiceWorker();
