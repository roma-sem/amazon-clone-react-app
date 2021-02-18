import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// APP CONTEXT:
import { AppStateContextProvider } from './context/AppStateContext';
import reducer, { initialState } from './context/reducer';


ReactDOM.render(
  <React.StrictMode>
    <AppStateContextProvider initialState={initialState} reducer={reducer}>
        <App />
    </AppStateContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
