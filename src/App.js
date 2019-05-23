import React, { Component } from 'react';
import './App.css';
import {Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Sobre from './pages/sobre/sobre';
import CadastrarDominio from './pages/cadastrar_dominio/cadastrar_dominio';
import Home from './pages/home/home';
import CadastrarEmail from './pages/cadastrar_email/cadastrar_email';
import Estatisticas from './pages/estatisticas/estatisticas';
import EmailsCorrigidos from './pages/emails_corrigidos/emails_corrigidos';


class App extends Component {
  render() {
    return (
      <Router> {/**Define as rotas */}
        <div>
          <Navbar bg="light" variant="light">
            <Navbar.Brand><Link to={'/'}>Navbar</Link></Navbar.Brand>
            <Nav className="mr-auto">
              <li><Link to="/">Home</Link></li> 
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/cadastrar_dominio">Cadastrar Domínio</Link ></li>
              <li><Link to="/cadastrar_email">Cadastrar Email</Link></li>
              <li><Link to="/estatisticas"> Estatistica</Link></li>
              <li><Link to="/emails_corrigidos">Emails Corrigidos</Link></li>
            </Nav>
          </Navbar>
          <Switch> {/**Exibe o conteúdo na mesma página */}
            <Route exact path={'/'} component={Home}/>
            <Route exact path='/sobre' component={Sobre}/>
            <Route exact path='/cadastrar_dominio' component={CadastrarDominio}/>
            <Route exact path='/cadastrar_email' component={CadastrarEmail}/>
            <Route exact path='/estatisticas' component={Estatisticas}/>
            <Route exact path='/emails_corrigidos' component={EmailsCorrigidos}/>
          </Switch>
         </div>
      </Router>
      
      
    );
  }
}

export default App;
