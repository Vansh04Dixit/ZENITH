import React from 'react';

export default function Awards (){
    return ( 
        <div className='container mt-5'>
            <div className='row'>
            <div className='col-6'>
                <img src='media/images/ProImg/largestBroker.svg' alt='LargestBroker' className='p-4'></img>
            </div>
            
            <div className='col-6 p-5'>
                <h1>Largest Stock Broker in India.</h1>
                <p className='mt-3'>2+ million zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing too.</p>
                <ul>
                <div className='row mt-5'>
                    <div className='col-6'>
                        <li className='mb-3'> 
                            Future and Options.
                        </li>
                        <li className='mb-3'>
                            Commodity derivatives.
                        </li>
                        <li className='mb-3'>
                            Currency derivatives.
                        </li>
                    </div>
                    
                    <div className='col-6'>
                        <li className='mb-3'> 
                            Stocks & IPOs.
                        </li>
                        <li className='mb-3'>
                            Direct mutual funds.
                        </li>
                        <li className='mb-3'>
                            Bonds and govt securities.
                        </li>
                    </div>
                </div>
                <img src='media/images/ProImg/pressLogos.png' alt='img' style={{width: '95%'}} className='mt-3'></img>
                </ul>
            </div>
            </div>
        </div>
    )
}