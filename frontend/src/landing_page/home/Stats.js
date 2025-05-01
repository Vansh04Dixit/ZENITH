import React from 'react';

function Stats() {
    return (  
        <div className='container p-3' style={{height: "50%"}}>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1>Trust with confidence.</h1>
                    
                    <h3 className='mt-4 mb-4'>Customer-first always</h3>
                    <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India</p>

                    <h3 className='mt-4 mb-4'>No spam or gimmicks</h3>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h3 className='mt-4 mb-4'>The Zerodha universe</h3>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h3 className='mt-4 mb-4'>Do better with money</h3>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>

                <div className='col-6'>
                    <img src='media/images/ProImg/ecosystem.png' style={{width: "100%" , height: "100%"}} alt='img'></img>
                </div>
            </div>            
        </div>
    );
}

export default Stats;