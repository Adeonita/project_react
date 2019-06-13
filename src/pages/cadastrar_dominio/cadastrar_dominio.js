import React, {Component} from 'react';
import '../../App.css';
import FormDomain from '../../components/form_domain';

class CadastrarDominio extends Component{
    render(){
        return(
            <div>
                <h1>
                    Cadastre um novo domínio
                </h1>
                <FormDomain />
            </div>
        );
    }
}

export default CadastrarDominio;