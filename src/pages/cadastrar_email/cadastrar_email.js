import React, { Component } from 'react';
import '../../App.css';
import FormEmail from '../../components/form_email';

class CadastrarEmail extends Component{
    render(){
        return(
            <div>
                <h1>
                    Cadastre um novo e-mail
                </h1>
                <div className="container">
                    <div className="row mt-5 justify-content-md-center">
                        <div className="col-md-4">
                            <FormEmail />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CadastrarEmail;