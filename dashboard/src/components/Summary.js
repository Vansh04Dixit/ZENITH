import React from 'react';

export default function Summary(){
    return(
        <div className='summary mt-3 ml-5' style={{width:"70%" , marginLeft:'300px'}}>
            <h1>Hi! User</h1>
            <div className='container border-bottom'>
                <div className='row'>    
                    <div className='col-6 p-5'>
                        <h3 className='text-muted'><i class="fa-solid fa-circle-notch me-2 fs-4"></i>Equity</h3>
                        <div className='main d-flex mt-4'>
                            <div className='equity me-5'>
                                <h3>0</h3>
                                <p>Margin availabel</p>
                            </div>

                            <div className='margin-info'>
                                <p>Margins used : 0</p>
                                <p>Opening balance : 0</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-6 p-5'>
                    <h3 className='text-muted'> <i class="fa-solid fa-droplet me-2 fs-"></i>Commodity</h3>
                        <div className='main d-flex mt-4'>
                            <div className='commodity me-5'>
                                <h3>0</h3>
                                <p>Margin availabel</p>
                            </div>

                            <div className='margin-info'>
                                <p>Margins used : 0</p>
                                <p>Opening balance : 0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}