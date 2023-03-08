import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './config/routes';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import {store} from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
);

if (navigator.serviceWorker) {
  //navigator.serviceWorker.register('/service-worker.js')
  //console.log('llamar a service worker');
}