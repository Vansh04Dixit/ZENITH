import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h1 className='mb-3'>Unbeatable Pricing.</h1>
                    <p style={{width: "70%"}} className='mt-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                </div>

                {/* <div className='col-2'></div> */}

                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col border p-3'>
                            <h4>
                            <i class="fa-solid fa-indian-rupee-sign">0</i>
                            </h4>
                            <p>Free equity delivery and <br></br>direct mutual funds.</p>
                        </div>

                        <div className='col border p-3'>
                            <h4>
                            <i class="fa-solid fa-indian-rupee-sign">20</i>
                            </h4>
                            <p>Intraday and IPOs.</p>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
     );
}

export default Pricing;