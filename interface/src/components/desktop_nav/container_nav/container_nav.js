import React from 'react';
import {Navbar, Container, Row, Col} from 'react-bootstrap';

import Home_Overlay from '../home_overlay/home_overlay';



const Container_Nav = (props) => {
    return (
        <Navbar bg="dark" color="light" fixed="bottom" height="10"> 
        
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