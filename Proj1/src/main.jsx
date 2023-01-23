import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import "./index.css";
import 'antd/dist/reset.css';



ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    </React.StrictMode>
  </Router>
);
