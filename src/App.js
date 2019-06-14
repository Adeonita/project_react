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
      <Router className="navbar"> {/**Define as rotas */}
        <div>
          <Navbar variant="light" className="colorNav">
            <Navbar.Brand className="margin-top-navbar"><Link to={'/'}>
              <img
                alt=""
                src="/assets/images/logo.gif"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Link></Navbar.Brand>
            <Nav className="mr-auto menu-principal">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/cadastrar-dominio">CADASTRAR DOMINIO</Link ></li>
              <li><Link to="/cadastrar-email">CADASTRAR EMAIL</Link></li>
              <li><Link to="/estatisticas"> ESTATÍSTICAS</Link></li>
            
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
