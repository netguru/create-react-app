import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import 'normalize.css';

import App from 'components/App';
import registerServiceWorker from 'utils/registerServiceWorker';

const HotApp = hot(module)(App);

ReactDOM.render(<HotApp />, document.getElementById('root'));

registerServiceWorker();
