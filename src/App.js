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
              <Nav.Link><Link to={'home'}>Home</Link></Nav.Link>
              <Nav.Link><Link to="/sobre">Sobre</Link></Nav.Link>
              <Nav.Link><Link to="/cadastrar_dominio">Cadastrar Domínio</Link ></Nav.Link>
              <Nav.Link><Link to="/cadastrar_email">Cadastrar Email</Link></Nav.Link>
              <Nav.Link><Link to="/estatisticas"> Estatistica</Link></Nav.Link>
              <Nav.Link><Link to="/emails_corrigidos">Emails Corrigidos</Link></Nav.Link>
            </Nav>
          </Navbar>
          <Switch> {/**Exibe o conteúdo na mesma página */}
            <Route exact path={'/'} component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/sobre' component={Sobre}/>
            <Route path='/cadastrar_dominio' component={CadastrarDominio}/>
            <Route path='/cadastrar_email' component={CadastrarEmail}/>
            <Route path='/estatisticas' component={Estatisticas}/>
            <Route path='/emails_corrigidos' component={EmailsCorrigidos}/>
          </Switch>
         </div>
      </Router>
      
      
    );
  }
}

export default App;
