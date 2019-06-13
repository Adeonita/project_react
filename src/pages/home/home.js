import React, {Component} from 'react';
import CardHome from '../../components/CardHome';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Image} from 'react-bootstrap';
import './home.css';


class Home extends Component{
    render(){
        return(
              <div>
              <h1>
                Gerencie Emails
              </h1>
                <Container>
                  <div className="card-home">
                    <Row>
                      <Col md={4}>
                        <Link to="/cadastrar-email"><CardHome backgroundColor="#ff6b35" description="CADASTRAR EMAIL" nameIcon="fas fa-user-plus"/></Link>
                      </Col>
                      <Col md={4}>
                        <Link to="/cadastrar-dominio"><CardHome backgroundColor="#ffa400" description="CADASTRAR DOMÍNIO" nameIcon="fas fa-mail-bulk"/></Link>
                      </Col>
                      <Col md={4}>
                        <Link to="/estatisticas"><CardHome backgroundColor="#ff6b35" description="ESTATÍSTICAS" nameIcon="fas fa-chart-pie"/></Link>
                      </Col>
                    </Row>
                  </div>
                </Container>
                <Container id="section-monitore-dados">
                  <h1>
                    Monitore dados
                  </h1>
                  <Row className="justify-content-md-center">
                    <Col md={4}>
                      <Image src="/assets/images/chart-home.gif" fluid />
                    </Col>
                    <Col md={6} className="text-center">
                      Através de gáficos interativos tenha a um click dados de seu sistema.
                    </Col>
                  </Row>
                </Container>
                <Container id="section-valide-dados">
                  <h1>
                    Validação de dados
                  </h1>
                  <Row className="justify-content-md-center">
                    <Col md={6} className="text-center">
                      Ainda no input todo os dados são validados, assegurando a qualidade...
                    </Col>
                    <Col md={4}>
                      <Image src="/assets/images/email2.gif" fluid />
                    </Col>
                  </Row>
                </Container>
            </div>

        );
    }
}

export default Home;
