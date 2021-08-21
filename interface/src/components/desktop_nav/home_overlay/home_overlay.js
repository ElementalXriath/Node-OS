import React from 'react';
import {Button, Popover, OverlayTrigger, Navbar} from 'react-bootstrap';
import '../container_nav/cont.css';
import Logo from './logo.png';

const Home_Overlay = (props) => {
    return (
        <OverlayTrigger
        trigger="click"
        overlay={
            <Popover id={`popover-positioned-top`}>
                <Popover.Header as="h4">{`File Directory`}</Popover.Header>
                    <Popover.Body >
                        <strong>Web Apps</strong>
                    </Popover.Body>
            </Popover>
        }
      >
        <Button variant="secondary">
         <Navbar.Brand href="#home">
                        <img
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        />
                    </Navbar.Brand></Button>
      </OverlayTrigger>     
    )
}

export default Home_Overlay;