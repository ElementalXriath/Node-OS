import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

// Calculator HOC 

class Calculator extends React.Component{
    constructor(){
        super()
        this.state = {
            inputVal: []
        }
    }

getValue = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue1 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue2 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue3 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue4 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue5 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue6 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue7 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue8 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue9 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue10 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue11 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue12 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue13 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue14 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }
getValue15 = (val) => {
    this.setState({
    inputVal: this.state.inputVal+val
})
    }

 Closed = () => {
this.setState({
    inputVal: ""
})
    }

 removeLast = () => {
 this.setState({
   inputVal: this.state.inputVal.slice(0,-1)
 })
    
 }

equalVal = () => {
    this.setState({
        inputVal: eval(this.state.inputVal)
    })
}   

    render(){
        return(
            <div className="container align-right">
                <div>         
                    <br/>
                    <br/>
                <div>
                        <input value={this.state.inputVal} type="text" style={{fontSize:"20px",width:"255px",marginLeft:"-10px",height: '40px',backgroundColor:"lightgrey",border:"none",color:"white",fontWeight:"bold",}} onChange={(v) => this.setState({inputVal: v.target.value})} />    
                    <br/>
                    <br/>
                        <ButtonGroup className="me-2" aria-label="First group">
                            <Button style={{margin:'3px', width:'10%', border:'black 2px solid', borderRadius: '3px'}} onClick={() => this.getValue('(')} >(</Button>
                            <Button style={{margin:'3px', width:'10%', border:'black 2px solid', borderRadius: '3px'}} onClick={() => this.removeLast()}>X</Button>
                            <Button style={{margin:'3px', width:'10%', border:'black 2px solid', borderRadius: '3px'}} onClick={() => this.getValue2(')')}>)</Button>
                            <div style={{width:'20px'}}></div>
                            <Button style={{margin:'3px', width:'10%', border:'black 2px solid', borderRadius: '3px'}} onClick= {this.Closed}>C</Button>
                        </ButtonGroup>
                <br/>
                        <ButtonGroup className="me-2" aria-label="First group">
                            <Button style={{margin:'3px', width:'10%', border:'black 2px solid', borderRadius: '3px'}} onClick={() => this.getValue('7')}>7</Button>
                            <Button style={{margin:'3px', width:'10%', border:'black 2px solid', borderRadius: '3px'}} onClick={() => this.getValue1('8')}>8</Button>
                            <Button style={{margin:'3px', width:'10%', border:'black 2px solid', borderRadius: '3px'}} onClick={() => this.getValue2('9')}>9</Button>
                            <div style={{width:'20px'}}></div>
                            <Button style={{margin:'3px', width:'10%', border:'black 2px solid', borderRadius: '3px'}} onClick={() => this.getValue3('/')}>/</Button>
                        </ButtonGroup>
                <br/>
                        <ButtonGroup className="me-2" aria-label="First group">
                            <Button style={{margin:'3px', width:'10%', border:'black 2px solid', borderRadius: '3px'}} onClick={() => this.getValue4('4')}>4</Button>
                            <Button style={{margin:'3px', width:'10%', border:'black 2px solid', borderRadius: '3px'}} onClick={() => this.getValue5('5')}>5</Button>
                            <Button style={{margin:'3px', width:'10%', border:'black 2px solid', borderRadius: '3px'}} onClick={() => this.getValue6('6')}>6</Button>
                            <div style={{width:'20px'}}></div>
                            <Button style={{margin:'3px', width:'10%', border:'black 2px solid', borderRadius: '3px'}} onClick={() => this.getValue7('*')}>*</Button>
                        </ButtonGroup>
                <br/>
                        <ButtonGroup className="me-2" aria-label="First group">
                            <Button style={{margin:'3px', width:'10%', border:'black 2px solid', borderRadius: '3px'}} onClick={() => this.getValue8('1')}>1</Button>
                            <Button style={{margin:'3px', width:'10%', border:'black 2px solid', borderRadius: '3px'}} onClick={() => this.getValue9('2')}>2</Button>
                            <Button style={{margin:'3px', width:'10%', border:'black 2px solid', borderRadius: '3px'}} onClick={() => this.getValue10('3')}>3</Button>
                            <div style={{width:'20px'}}></div>
                            <Button style={{margin:'3px', width:'10%', border:'black 2px solid', borderRadius: '3px'}} onClick={() => this.getValue11('-')}>-</Button>
                        </ButtonGroup>
                <br/>
                        <ButtonGroup className="me-2" aria-label="First group">
                            <Button style={{margin:'3px', width:'10%', border:'black 2px solid', borderRadius: '3px'}} onClick={() => this.getValue12('0')}>0</Button>
                            <Button style={{margin:'3px', width:'10%', border:'black 2px solid', borderRadius: '3px'}} onClick={() => this.getValue13('.')}>.</Button>
                            <Button style={{margin:'3px', width:'10%', border:'black 2px solid', borderRadius: '3px'}} onClick={() => this.getValue14('00')}>00</Button>
                            <div style={{width:'20px'}}></div>
                            <Button style={{margin:'3px', width:'10%', border:'black 2px solid', borderRadius: '3px'}} onClick={this.equalVal}>=</Button>
                            
                        </ButtonGroup>
                <br/>
                <Button style={{margin:'3px', width:'10%', border:'black 2px solid', borderRadius: '3px'}} onClick={() => this.getValue15('+')}>+</Button>
                           
                </div>
            </div>
        </div>
    );   
  }
}

export default Calculator;