import React from 'react';
import ReactDOM from 'react-dom';
import RouterPage from "./RouterPage"
import { BrowserRouter as Router }from "react-router-dom"
import './_globals.scss'
import {Provider} from "react-redux"
import store from "./redux/redux-store"

ReactDOM.render(
    <Router>
        <Provider store={store}>
        <RouterPage />
        </Provider>
    </Router>
,
  document.getElementById('root')
);

