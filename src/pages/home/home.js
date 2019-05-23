import React, {Component} from 'react';
import CardHome from '../../components/card_home';
import { Link } from 'react-router-dom';



class Home extends Component{
    render(){
        return(
            <div className="container mt-5 ">
                <div className="row justify-content-md-center">
                    <div className="col">
                        <Link to="/cadastrar_email"><CardHome description="Cadastrar Email" nameIcon="fas fa-user-plus"/></Link >
                    </div>
                    <div className="col">
                        <Link to="/cadastrar_dominio"><CardHome description="Cadastrar domínio" nameIcon="fas fa-mail-bulk"/></Link>
                    </div>
                    <div className="col">
                        <Link to="/estatisticas"><CardHome description="Estatísticas" nameIcon="fas fa-chart-pie"/></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;