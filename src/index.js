import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider, { AuthContext } from './Contexts/AuthContext';
import { DataProvider } from './Contexts/DataContext';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


ReactDOM.render(
  <React.StrictMode>
        <AuthContextProvider>
          <DataProvider>
            <App />
          </DataProvider>
        </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
