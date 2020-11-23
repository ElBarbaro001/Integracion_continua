import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './index.scss';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
