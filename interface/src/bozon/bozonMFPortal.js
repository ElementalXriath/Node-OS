import React from 'react';

//Tools Hieachary Component for View => Portal for subframes
import ToolSF from './component_store/tools_os/tools_bozon/tools_subFrame'; //Tools


const MainPortalFrame = () => {


    return (

        <div className="shadow p-3 mb-5 bg-white rounded">
           <ToolSF/>
        </div>

    )

}

export default MainPortalFrame;