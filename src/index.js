import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
    </Switch>
  </BrowserRouter>
  ,document.getElementById('root'));

