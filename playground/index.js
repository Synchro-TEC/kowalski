import React from 'react';
import ReactDOM from 'react-dom';
import Kowalski from 'kowalski';
import DATA from './data';
const mountNode = document.getElementById('app');

ReactDOM.render(<Kowalski appName="Kowalski Playgroud" data={DATA.cars} allowSelectChart />, mountNode);
