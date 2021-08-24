import React from 'react';
import Calendar from 'rc-calendar';

const cal_wrap = { 
    padding: '16px',
    borderRadius: '6px',
    border: '4px grey solid',
    fontColor: 'red'
    
}
const CalEmit = () => {
    return(    
           <div className='bg-secondary' style={cal_wrap}><Calendar/></div> 
        )
}
export default CalEmit;