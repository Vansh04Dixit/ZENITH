export default function Team (){
    return(
        <div className="container">

            <div className="row mt-2 text-muted">
                <h1 className="fs-1 text-center">People</h1>
            </div>

            <div className="row">

                <div className="col-6 p-5 text-center">
                    <img style={{borderRadius:'100%', width:'50%'}} src="media/images/ProImg/profileImage.png" alt=""></img>
                    <br></br>
                    <h5 className="mt-3 text-muted">Fonder & CEO</h5>
                </div>

                <div className='col-6 p-4' style={{lineHeight: '1.8', fontSize: '17px'}}>
                    <p className='ml-5 mt-4 text-muted'>Prasanna bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    <br></br>
                    <br></br>
                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    <br></br>
                    <br></br>
                    Playing basketball is his zen.
                    <br></br>
                    <br></br>
                    Connect on Homepage / TradingQnA / Twitter</p>
                </div>
            </div>
        </div>
    )
}