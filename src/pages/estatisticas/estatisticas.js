import React, { Component } from 'react';
import '../../App.css';
import Chart from '../../components/Chart';
import {Spinner, Row, Col, Container} from 'react-bootstrap';
import './estatisticas.css';

class Estatisticas extends Component{

    constructor(props){
      super(props);
      this.state = {
                      loading:false,
                      relatorio: {
                        data: {

                        }
                      }
                   };
      //this.carregaDados = this.carregaDados.bind(this);
    }

    componentDidMount() {
        this.carregaDados();
    }

    render(){
      const loading = this.state.loading;
      let component;
      if(loading) {
        component = <div>
                      <Container>
                        <Row className="justify-content-center">
                          <Col md={6} className="text-center">
                            <Spinner animation="border" />
                          </Col>
                        </Row>
                      </Container>
                    </div>
      } else {
        component = <Chart labels={Object.keys(this.state.relatorio.data)}
                           label="Domínios"
                           data={Object.values(this.state.relatorio.data)}/>
      }

      return(
        <div>
            <h1>
               Estatisticas
            </h1>
            {component}
        </div>
      );
    }

    carregaDados(){
      this.setState({loading: true});
      fetch('http://localhost/webservice/pages/invalid_emails.php')
      .then(response => response.json())
      .then(data => {
        this.setState({loading:false, relatorio: data})
        //console.log(Object.values(this.state.relatorio.data));
      });
    }

}

export default Estatisticas;
