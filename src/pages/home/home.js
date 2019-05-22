import React, {Component} from 'react';
import IconHome from '../../components/icons_home';
import {Row,Col, Container } from 'react-bootstrap';

class Home extends Component{
    render(){
        return(
            <div className="container mt-5 ">
                <div className="row justify-content-md-center">
                    <div className="col">
                        <IconHome/>
                    </div>
                    <div className="col">
                        <IconHome/>
                    </div>
                    <div className="col">
                        <IconHome/>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Home;