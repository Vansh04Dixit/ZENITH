import React from 'react';

export default function Funds(){
    return(
        <div className='cover mt-5 mb-5' style={{width:"80%", marginLeft:"270px"}}>
            <div className='row'>
                <div className='col-5 border me-4'>
                    <h5 className='mb-4 mt-3 p-2'><i class="fa-solid fa-circle-notch me-2 fs-5"></i>Equity</h5>
                    <ol style={{lineHeight:"2"}}>
                    <li>Available margin : 0.00</li>
                    <li>Used margin : 0.00</li>
                    <li>Available cash : 0.00</li>
                    <li>Opening balance :	0.00</li>
                    <li>Payin : 0.00</li>
                    <li>Payout :	0.00</li>
                    <li>SPAN	: 0.00</li>
                    <li>Delivery margin :	0.00</li>
                    <li>Exposure :	0.00</li>
                    <li>Options premium :	0.00</li>
                    <li>Collateral (Liquid funds) :	0.00</li>
                    <li>Collateral (Equity) :	0.00</li>
                    <li>Total collateral :	0.00</li>
                    </ol>
                </div>

                <div className='col-5 border'>
                <h5 className='mb-4 mt-3 p-2'><i class="fa-solid fa-droplet me-2 fs-5"></i>Commodity</h5>
                    <ol style={{lineHeight:"2"}}>
                    <li>Available margin : 0.00</li>
                    <li>Used margin : 0.00</li>
                    <li>Available cash : 0.00</li>
                    <li>Opening balance :	0.00</li>
                    <li>Payin : 0.00</li>
                    <li>Payout :	0.00</li>
                    <li>SPAN	: 0.00</li>
                    <li>Delivery margin :	0.00</li>
                    <li>Exposure :	0.00</li>
                    <li>Options premium :	0.00</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}