import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';


class FormDomain extends Component{
    render(){
        return(
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Insira o domínio</Form.Label>
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

export default FormDomain;