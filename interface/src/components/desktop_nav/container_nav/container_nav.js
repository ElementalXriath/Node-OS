import React from 'react';
import {Navbar, Container, Row, Col, Button} from 'react-bootstrap';

import './cont.css';
import Home_Overlay from '../home_overlay/home_overlay';



const Container_Nav = (props) => {
    return (
        <Navbar bg="dark" color="light" fixed="bottom" height="10" class="Border"> 
        
                <Row>
                    <Col sm={1}>
                       <Home_Overlay/>
                    </Col>
                    <Col sm={11}></Col>
                </Row>
                   
      
        </Navbar>
    )
}

export default Container_Nav;