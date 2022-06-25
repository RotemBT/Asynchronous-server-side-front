import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ManagementContextProvider } from './managment-context/management-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ManagementContextProvider>
      <App />
    </ManagementContextProvider>
  </React.StrictMode>
);
