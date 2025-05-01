export default function Universe(){
    return(
        <div className="container">
            <div className="row">

                <div className="col mt-5 text-center">
                    <h5 className="text-muted">Want to know more about our technology stack? Check out the Zerodha.tech blog.</h5>
                    <br></br>
                    <br></br>
                    <h1 className="mt-5">The Zerodha Universe</h1>
                    <p>
                    Extend your trading and investment experience even further with our partner platforms
                    </p>
                </div>


                <div className="row p-5 text-center">
                    <div className="col-4 p-5">
                        <img src="media/images/ProImg/zerodhafundhouse.png" alt="" style={{width:"75%"}}></img>
                        <p className="text-small mt-3 text-muted">Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                    </div>
                    <div className="col-4 p-5">
                        <img src="media/images/ProImg/sensibullLogo.svg" className="mb-3 mt-2" alt="" style={{width:"75%"}}></img>
                        <p className="text-small mt-3 text-muted">Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.</p>
                    </div>
                    <div className="col-4 p-5">
                        <img src="media/images/ProImg/bymetijori.svg" alt="" style={{width:"60%"}}></img>
                        <p className="text-small mt-3 text-muted">Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.</p>
                    </div>
                </div>
                <hr></hr>
                <div className="row p-5 text-center">
                    <div className="col-4 p-5">
                        <img src="media/images/ProImg/streakLogo.png" alt="" style={{width:"70%"}}></img>
                        <p className="text-small text-muted" style={{marginTop:"33px"}}>
                            Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.</p>
                    </div>
                    <div className="col-4 p-5">
                        <img src="media/images/ProImg/goldenpiLogo.png" className="mb-3 mt-2" alt="" style={{width:"75%"}}></img> 
                        <p className="text-small mt-3 text-muted">Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                    </div>
                    <div className="col-4 p-5">
                        <img src="media/images/ProImg/dittoLogo.png" alt="" style={{width:"55%"}}></img>
                        <p className="text-small text-muted" style={{marginTop:"40px"}}>Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                        Sign up for free</p>
                    </div>
                </div>
                <button className='btn btn-primary fs-5 mb-5' style={{width: "20%" , margin: "auto" , padding: "0.50rem"}}>Sign up for free</button>
            </div>
        </div>
    )
}