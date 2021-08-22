import React from 'react';

//Imports for Links


//HOC FRAME for all applictions using its protocal.

const Admin_Theme = {
    color : 'aqua',
    border : '1px solid coal',
    marginTop: '20px',
    padding: 0
};


const LinksSF = () => {

    const [linkuse, setlinkuse] = React.useState('url');
    const [modeIn, setmodeIn] = React.useState(' demo ')

    const modeInView = linkuse;

    const weatherMode = () => {
        setmodeIn('url new tab')
    };

    const newsMode = () => {
        setmodeIn('url new tab')
    };

    const stockMode = () => {
        setmodeIn('new url')
    }
    
    return (
        
        <div className="container" style={Admin_Theme}>

             <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" >Amazon</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" >YouTube</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Cyrpto Watcher</a>
                </li>
            </ul>
            
            <div>
                {modeIn}
            </div>
               
        </div>

    )
};

export default LinksSF;