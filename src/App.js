import React, { Component } from 'react';
import './App.css';
import {Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import CadastrarDominio from './pages/cadastrar-dominio/cadastrar-dominio';
import Home from './pages/home/home';
import CadastrarEmail from './pages/cadastrar-email/cadastrar-email';
import Estatisticas from './pages/estatisticas/estatisticas';
import EmailsCorrigidos from './pages/emails-corrigidos/emails-corrigidos';

class App extends Component {
  render() {
    return (
      <Router> {/**Define as rotas */}
        <div>
          <Navbar variant="light" className="colorNav">
            <Navbar.Brand><Link to={'/'}>Navbar</Link></Navbar.Brand>
            <Nav className="mr-auto menu-principal">
              <li><Link to="/">Home</Link></li> 
              <li><Link to="/cadastrar-dominio">Cadastrar Domínio</Link ></li>
              <li><Link to="/cadastrar-email">Cadastrar Email</Link></li>
              <li><Link to="/estatisticas"> Estatisticas</Link></li>
              <li><Link to="/emails-corrigidos">Emails Corrigidos</Link></li>
            </Nav>
          </Navbar>
          <Switch> {/**Exibe o conteúdo na mesma página */}
            <Route exact path={'/'} component={Home}/>
            <Route exact path='/cadastrar-dominio' component={CadastrarDominio}/>
            <Route exact path='/cadastrar-email' component={CadastrarEmail}/>
            <Route exact path='/estatisticas' component={Estatisticas}/>
            <Route exact path='/emails-corrigidos' component={EmailsCorrigidos}/>
          </Switch>
         </div>
      </Router>
    );
  }
}

export default App;
