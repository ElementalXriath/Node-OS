import React from 'react';

//Imports for Tools
import Calculator from '../tool_store/calculator_os/calculator';
import CalEmit from '../tool_store/calendar/calendar';

//HOC FRAME for all applictions using its protocal.

const Admin_Theme = {
    color : 'aqua',
    border : '1px solid coal',
    marginTop: '20px',
    padding: 0
};


const ToolsSF = () => {

    const [tooluse, settooluse] = React.useState('Calc');
    const [modeIn, setmodeIn] = React.useState(<Calculator/>)

    const modeInView = tooluse;
    const calcMode = () => {
        setmodeIn(<Calculator/>)
    };

    const calnMode = () => {
        setmodeIn(<CalEmit/>)
    }
    
    return (
        
        <div className="container" style={Admin_Theme}>

             <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" onClick={calcMode}>Calculator</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={calnMode}>Calander</a>
                </li>
            </ul>
            
            <div>
                {modeIn}
            </div>
               
        </div>

    )
};

export default ToolsSF;