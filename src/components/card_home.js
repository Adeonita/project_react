import React, { Component } from 'react';
import './card_home.css';
import {Card} from 'react-bootstrap';


class CardHome extends Component{

    render(){
        return(
            <div className="CardHome">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <i className={this.props.nameIcon}></i>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            
        );
    }
}

export default CardHome;