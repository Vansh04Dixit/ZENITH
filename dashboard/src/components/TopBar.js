import React from 'react';
import Menu from './Menu';
export default function TopBar(){
    return(
        <div className='cover d-flex '>
            <div className='topbar p-2 border'>
            <div className='nifty'>
                <p>Nifty 50 <br></br> <span className='text-danger'>{100.3}</span></p>
            </div>
            <div className='nifty'>
                <p>SENSEX <br></br> <span className='text-danger'>{100.3}</span></p>
            </div>
        </div>
        <Menu />
        </div>
    )
}