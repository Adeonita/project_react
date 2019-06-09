import React, { Component } from 'react';
import '../../App.css';
import FormRegister from '../../components/FormRegister';

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
                            <FormRegister titleForm="Insira seu e-mail" placeholder="nome@dominio.com" textButton="Cadastrar"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CadastrarEmail;