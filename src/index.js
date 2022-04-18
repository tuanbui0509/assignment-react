import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import "react-datetime/css/react-datetime.css";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";
import App from './App';
import index from "./redux";
import './sass/index.scss';


ReactDOM.render(
  <Provider store={index.store}>
    <PersistGate loading={null} persistor={index.persistor}>
      <React.StrictMode>
        <ToastContainer
          position="top-right"
          autoClose={2000}
        />
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);