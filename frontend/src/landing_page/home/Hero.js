import React from 'react';

function Hero() {
    return (
    <div className='container p-5 text-center mt-5'>
        <div className='row'>
            <img src='media/images/ProImg/homeHero.png' alt='Hero-Image' className='mb-5'></img>
            <h1>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='btn btn-primary fs-5 mt-2' style={{width: "20%" , margin: "auto" , padding: "0.50rem"}}>Sign up for free</button>
        </div>
    </div> 
    );
}

export default Hero;