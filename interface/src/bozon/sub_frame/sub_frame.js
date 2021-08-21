import React from 'react';
import ToolStore from '../component_store/tools_os/tool_store/tool_store';

//HOC FRAME for all applictions using its protocal.
//A simple method of browser auto configuration to orbit scalabilty.

//Frames are in a sense windows(components)

const Admin_Theme = {
    color : 'aqua',
    border : '1px solid coal',
    margin : '35px',
    padding : '25px',
 
}; //Theme from Reactor


const Sub_Frame = () => {

    return (

        <div className="container" style={Admin_Theme} className='shadow-lg p-3 mb-5 bg-white rounded'>
            <h2>{ToolStore.calculator_001.frame_dir}</h2>

            {ToolStore.calculator_001.module}
           
        </div>

    )
};

export default Sub_Frame;