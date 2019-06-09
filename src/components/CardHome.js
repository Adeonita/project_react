import React, { Component } from 'react';
import './CardHome.css';
import {Card} from 'react-bootstrap';


class CardHome extends Component{

    render(){
        return(
            <div className="CardHome">
                <Card style={{ width: '18rem' }}>
                    <Card.Body className="sizeIcon">
                        <i className={this.props.nameIcon}></i>
                        <Card.Text className="sizeText">
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            
        );
    }
}

export default CardHome;