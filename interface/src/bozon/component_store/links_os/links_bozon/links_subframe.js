import React from 'react';

//Imports for Links

//HOC FRAME for all applictions using its protocal.

//MediaPool

const Admin_Theme = {
    color : 'aqua',
    border : '1px solid coal',
    marginTop: '20px',
    padding: 0
};


const LinksSF = () => {


    const linksSubFrame = () => {
        return (
            <div>
            </div>
        )
    };

    const [linkuse, setlinkuse] = React.useState('url');
    const [modeIn, setmodeIn] = React.useState(linksSubFrame);

    const modeInView = linkuse;

    const fav_1 = () => {
        setmodeIn('url new tab')
    };

    const newsMode = () => {
        setmodeIn('url new tab')
    };

    const stockMode = () => {
        setmodeIn('new url')
    };
    
    return (
        
        <div className="container" style={Admin_Theme}>

             <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link">Shopping</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Media</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Games</a>
                </li>
            </ul>
            
            <div>
                {modeIn}
            </div>
               
        </div>

    )
};

export default LinksSF;