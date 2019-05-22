import React, { Component } from 'react';
import './App.css';
import {Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Sobre from './sobre/sobre';
import CadastrarDominio from './pages/cadastrar_dominio/cadastrar_dominio';
import Home from './pages/home/home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="light" variant="light">
            <Navbar.Brand><Link to={'/'}>Navbar</Link></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link><Link to={'home'}>Home</Link></Nav.Link>
              <Nav.Link><Link to="/sobre">Sobre</Link></Nav.Link>
              <Nav.Link><Link to="/cadastrar_dominio">Cadastrar Domínio</Link ></Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/sobre' component={Sobre}/>
            <Route path='/cadastrar_dominio' component={CadastrarDominio}/>
          </Switch>
         </div>
      </Router>
      
    );
  }
}

export default App;
