import React, {Component} from 'react';
import '../../App.css';
import FormRegister from '../../components/FormRegister';

class CadastrarDominio extends Component{
    render(){
        return(
            <div>
                <h1>
                    Cadastre um novo domínio
                </h1>
                <div className="container">
                    <div className="row mt-5 justify-content-md-center">
                        <div className="col-md-4">
                            <FormRegister titleForm="Insira seu domínio" placeholder="@seudominio.com" textButton="Cadastrar"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CadastrarDominio;