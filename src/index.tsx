import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App/App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App title='ciao'/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
