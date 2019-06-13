import React, { Component } from 'react';
import '../../App.css';
import './emails-corrigidos.css';
import { Row,Col, Container, Card, ListGroup} from 'react-bootstrap';

class EmailsCorrigidos extends Component {
    render(){
        return(
            <div>
                <h1>
                    Página Emails Corrigidos
                </h1>
                <Container>
                  <Row className="justify-content-md-center">
                    <Col md={4}>
                    <Card>
                      <Card.Title>Emails Corrigidos</Card.Title>
                      <ListGroup variant="flush">
                          <ListGroup.Item>nome@dominio.com.algumacoisa</ListGroup.Item>
                        </ListGroup>
                      </Card>
                    </Col>
                  </Row>
                </Container>
            </div>
        );


        let emailsCorrigidos;
        fetch('http:/localhost/webservice/pages/corrected_emails.php')
        .then();
    }
}

export default EmailsCorrigidos;
