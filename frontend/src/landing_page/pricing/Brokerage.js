export default function Brokerage(){
    return(
        <div className="container mb-5 p-2">
            <div className="row text-center border-bottom">

                <div className="col-4  mb-5">
                    <img src="media/images/ProImg/pricing0.svg" style={{width:"40%"}}></img>
                    <h1>Free equity delivery</h1>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>

                <div className="col-4 mb-5">
                <img src="media/images/ProImg/other-trades.svg" style={{width:"40%"}}></img>
                <h1>Intraday, F&O trades</h1>
                <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>

                <div className="col-4 mb-5">
                <img src="media/images/ProImg/pricing0.svg" style={{width:"40%"}}></img>
                <h1 >Free direct MF</h1>
                <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>

            </div>
        </div>
    )
}