import React from 'react';

import '../../styling_os/thememusic.css';

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
    };
    
    return (
        
        <div className="container m-0 kit_text" style={Admin_Theme}>

             <ul className="nav justify-content-end shadow-sm p-3 mb-5 bg-white rounded">
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