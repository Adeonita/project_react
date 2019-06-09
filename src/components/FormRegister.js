import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';


class FormRegister extends Component{
    render(){
        return(
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>{this.props.titleForm}</Form.Label>
                        <Form.Control type="email" placeholder={this.props.placeholder} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {this.props.textButton}
                    </Button>
                </Form>
            </div>

        );
    }
}

export default FormRegister;