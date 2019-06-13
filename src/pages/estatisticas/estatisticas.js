import React, { Component } from 'react';
import '../../App.css';
import Chart from '../../components/Chart';
import {Image, Row, Col, Container, Card, Nav} from 'react-bootstrap';
import './estatisticas.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class Estatisticas extends Component{

    constructor(props){ //Método construtor
      super(props);
      this.state = { //Inicialmente o
                      loading:false, //Carregamento é falso
                      relatorio: { //E relatorio está vazio, caso contrário apresenta erro
                        data: {

                        }
                      },
                      relatorioRegiao:{

                      }
                   };
    }

    componentDidMount() {
        this.carregaDados();  //Após montar o component chama a função carregaDados
    }

    render(){
      const loading = this.state.loading;  //Atribuo o estado de carregamento(falso) a constante loading
      let chartDomains;  //Crio uma variavel chamada Gráfico de domínios
      let chartOccurrence; //Guardo o gráfico de Ocorrencias
      let countInvalidDomains; //Exibe a quantidade total de domínios inválidos
      let chartRegion;

      if(loading) {
        chartDomains = <div>
                      <Container>
                        <Row className="justify-content-center loading">
                          <Col md={6} className="text-center">
                            <Image src="/assets/images/loading.gif" fluid />
                          </Col>
                        </Row>
                      </Container>
                    </div>
      } else {
        chartDomains = <Chart labels={Object.keys(this.state.relatorio.data)}
                           label="Domínios"
                           data={Object.values(this.state.relatorio.data)}
                           titleChart="Domínios Inválidos"
                           type="Bar"
                           />

        chartOccurrence = <Chart labels={[this.state.relatorio.highestOccurrenceEmail,this.state.relatorio.lessOccurrenceEmail]}
                                        label="Ocorrencias"
                                        data={[this.state.relatorio.highestOccurrence,this.state.relatorio.lessOccurrence]}
                                        titleChart="Ocorrencias"
                                        type="Line"
                                        />

        countInvalidDomains = <Card className="invalidDomainsCard" style={{ width: '18rem' }}>
                                <Card.Body>
                                  <Card.Title>Total de emails inválidos</Card.Title>
                                  <Card.Text>
                                    {this.state.relatorio.countInvalidEmails}
                                  </Card.Text>
                                </Card.Body>
                              </Card>

        chartRegion = <Chart labels={Object.keys(this.state.relatorioRegiao)}
                             label="Emails invalidos por região"
                             data={Object.values(this.state.relatorioRegiao)}
                             titleChart="Emails invalidos por região"
                             type="Line"
                            />

      }


      return(
        <div className="backgroundColor">
            <h1>
               Estatisticas
            </h1>
            {chartDomains}
            {countInvalidDomains}
            {chartOccurrence}
            {chartRegion}
        </div>
      );
    }

    carregaDados(){
      this.setState({loading: true}); //transformo loading em verdadeiro
      fetch('http://localhost/webservice/pages/invalid_emails.php') //Então faço uma requisição Ajax da página que contém o relatório
      .then(response => response.json())  //Transforma o json em objeto
      .then(data => { //e então
        this.setState({loading:false, relatorio: data}) //Passo os dados que quero alterar e seus valores. No caso loading e guardo data em relatório
        //console.log(Object.values(this.state.relatorio.data));
      });
      fetch('http://localhost/webservice/pages/region_emails.php') //Requisição Ajax para relatório de regiao
      .then(response => response.json())
      .then(data => {
        this.setState({relatorioRegiao: data })
      });
    }

}

export default Estatisticas;
