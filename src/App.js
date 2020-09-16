import React from 'react';
import { Provider } from 'react-redux';
import ReactNotification from 'react-notifications-component';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';

import 'react-notifications-component/dist/theme.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

import './App.css';
import './app/assets/fontawesome/all.min.css';
import './app/assets/css/sb-admin-2.min.css';
import './app/assets/css/add-property.css';
import './app/assets/css/style.css';

import configureStore from './app/redux/configureStore';
import AppRoutes from './routes';


const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ReactNotification />
      <AppRoutes />
    </Provider>
  );
}

export default App;
