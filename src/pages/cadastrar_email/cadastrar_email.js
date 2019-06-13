import React, { Component } from 'react';
import '../../App.css';
import FromEmail from '../../components/form_email';
class CadastrarEmail extends Component{
    render(){
        return(
            <div>
                <h1>
                    Cadastre um novo e-mail
                </h1>
                <FromEmail />
            </div>
        );
    }
}

export default CadastrarEmail;