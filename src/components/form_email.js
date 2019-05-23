import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';

class FormEmail extends Component {
    render(){
        return (
            <div>
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

        );
    }
}

export default FormEmail;