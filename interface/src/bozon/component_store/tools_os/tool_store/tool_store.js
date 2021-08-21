//Tool store is a obeject housing all tool related components to cross reference
//before injecting into the visable interface.

import Calculator from "./calculator_os/calculator";

var tool_store = {

        calculator_001: {
            module: <Calculator/>,
            frame_dir: 'Calculator-Lite',
            
        },

        otherapp: 'other app'  

};

export default tool_store;