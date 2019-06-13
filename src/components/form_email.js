import React, { Component } from 'react';
import {Container, Row, Form, Button} from 'react-bootstrap';

class FormEmail extends Component {
    render(){
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-4">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Insira o email</Form.Label>
                            <Form.Control type="email" placeholder="Insira o domínio" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Cadastrar
                        </Button>
                    </Form>
                    </div>
                </div>
            </div>

        );
    }
}

export default FormEmail;