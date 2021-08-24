import React from "react";
import { Navbar, OverlayTrigger, Row, Col, Popover, Button } from "react-bootstrap";
import Logo from './node-js-icon.png';

//FRAMES_Bozan Main Portal

import LinksSF from "./bozon/component_store/links_os/links_bozon/links_subframe";
import ToolsSF from "./bozon/component_store/tools_os/tools_bozon/tools_subFrame";

import { DiNetbeans, DiChrome, DiUikit } from "react-icons/di";

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

        <Navbar bg="dark" color="light" fixed="bottom" style={{height: '35px'}}>         
                <Row>
                    <Col sm={4}>
            <OverlayTrigger
                    trigger="click"
                    overlay={
                <Popover id={`popover-positioned-top`}>
                  <Popover.Header as="h4" style={{opacity:'.9'}} className='bg-dark text-white'><DiNetbeans style={{color:'green'}}/>{`File Directory`}</Popover.Header>
                    <Popover.Body className='shadow'>
                        <strong><DiNetbeans/>Core Apps</strong>
                        <br/>
                        <Button variant="secondary" style={{height:'30px', padding: '3px', width: '75px'}} onClick={mode_Tools}>
                            Tools
                        </Button>
                        <br/>
                        <strong><DiChrome/>Webb Apps</strong>
                        <br/>
                        <Button variant="secondary" style={{height:'30px', padding: '3px', width: '75px'}} onClick={mode_Links}>
                             Links                     
                        </Button>
                        <br/>
                        <strong>Media</strong>
                        <br/>
                        <Button variant="secondary" style={{height:'30px', padding: '3px', width: '75px'}} onClick={mode_Links}>
                             Look           
                        </Button>
                        <br/>
                        <strong>Crytpo</strong>
                        <br/>
                        <Button variant="secondary" style={{height:'30px', padding: '3px', width: '75px'}} onClick={mode_Links}>
                              Store            
                        </Button>
                        
                    </Popover.Body>
                </Popover>
        }
      >
                  <Button variant="secondary" size='sm' style={{marginLeft: '12px', opacity: '.4'}}>
                      <Navbar.Brand href="#home" style={{opacity:'1'}}>
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
