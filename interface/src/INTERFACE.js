import React from "react";
import { Navbar, OverlayTrigger, Row, Col, Popover, Button } from "react-bootstrap";
import Logo from './node-js-icon.png';

//FRAMES_Bozan Main Portal

import LinksSF from "./bozon/component_store/links_os/links_bozon/links_subframe";
import ToolsSF from "./bozon/component_store/tools_os/tools_bozon/tools_subFrame";



//Interface_mainWindow

//Frames - 1: Tools

const INTERFACE = () => {

  //Mainframe_State -- DeskTop Only

  const [mainFrame, setMainFrame] = React.useState('Home');

  var mainFrame_set = mainFrame;

  const mode_Tools = () =>{
    setMainFrame(<ToolsSF/>)
  }
  
  const mode_Links = () =>{
    setMainFrame(<LinksSF/>)
  }
const Core_CSS = {

};

  return (
    <div className="INTERFACE" style={Core_CSS} className="container">

          {mainFrame}

        <Navbar bg="dark" color="light" fixed="bottom" height="10">         
                <Row>
                    <Col sm={4}>
            <OverlayTrigger
                    trigger="click"
                    overlay={
                <Popover id={`popover-positioned-top`}>
                  <Popover.Header as="h4">{`File Directory`}</Popover.Header>
                    <Popover.Body >
                        <strong>Core Apps</strong>
                        <br/>
                        <Button variant="secondary" size="sm" onClick={mode_Tools}>
                            Tools
                        </Button>
                        <br/>
                        <strong>Webb Apps</strong>
                        <br/>
                        <Button variant="secondary" size="sm" onClick={mode_Links}>
                             Links                     
                        </Button>
                        <br/>
                        <strong>Media</strong>
                        <br/>
                        <Button variant="secondary" size="sm" onClick={mode_Links}>
                             View                
                        </Button>
                    </Popover.Body>
                </Popover>
        }
      >
                  <Button variant="secondary" size='sm' style={{marginLeft: '12px'}}>
                      <Navbar.Brand href="#home">
                          <img
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                          />
                      </Navbar.Brand>
                  </Button>
            </OverlayTrigger>  
                    </Col>
                
                    <Col sm={9}>
                
                    </Col>
                </Row>
                    
        </Navbar>
    </div> 
  );
};

export default INTERFACE;
