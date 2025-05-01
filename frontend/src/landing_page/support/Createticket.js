export default function Createticket (){
    return (
        <div className="container mt-5">
            <div className="row p-2">

                <h3 className="text-muted">To create a ticket, select a relevant topic</h3>

                <div className="col-4 mt-5 p-2">
                    <h5 className=""><i class="fa-regular fa-square-plus me-2"></i>Account Opening</h5>
                    <ul className="list-unstyled p-3" style={{lineHeight:"2"}}>
                    <li>Resident individual</li>
                    <li>Minor</li>
                    <li>Non Resident Indian (NRI)</li>
                    <li>Company, Partnership, HUF and LLP</li>
                    <li>Glossary</li>
                    </ul>
                </div>
                
                <div className="col-4 mt-5 p-2">
                <h5 className=""><i class="fa-regular fa-user me-2"></i>Your Zerodha Account</h5>
                    <ul className="list-unstyled p-3" style={{lineHeight:"2"}}>
                    <li>Your Profile</li>
                    <li>Account modification</li>
                    <li>Client Master Report (CMR) and Depository Participant (DP)</li>
                    <li>Nomination</li>
                    <li>Transfer and conversion of securities</li>
                    </ul>
                </div>

                <div className="col-4 mt-5 p-2">
                <h5 className=""><i class="fa-solid fa-chart-simple me-2"></i>Kite</h5>
                    <ul className="list-unstyled p-3" style={{lineHeight:"2"}}>
                    <li>IPO</li>
                    <li>Trading FAQs</li>
                    <li>Margin Trading Facility (MTF) and Margins</li>
                    <li>Charts and orders</li>
                    <li>Alerts and Nudges</li>
                    <li>General</li>
                    </ul>
                </div>

            </div>

            <div className="row p-3">

                <div className="col-4  p-2">
                    <h5 className=""><i class="fa-solid fa-bag-shopping me-2"></i>Funds</h5>
                    <ul className="list-unstyled p-3" style={{lineHeight:"2"}}>
                    <li>Add money</li>
                    <li>Withdraw money</li>
                    <li>Add bank accounts</li>
                    <li>eMandates</li>
                    </ul>
                </div>
                
                <div className="col-4  p-2">
                <h5 className=""><i class="fa-brands fa-algolia me-2"></i>Console</h5>
                    <ul className="list-unstyled p-3" style={{lineHeight:"2"}}>
                    <li>Portfolio</li>
                    <li>Corporate actions</li>
                    <li>Funds statement</li>
                    <li>Reports</li>
                    <li>Profile</li>
                    <li>Segments</li>
                    </ul>
                </div>

                <div className="col-4  p-2">
                <h5 className=""><i class="fa-brands fa-nfc-directional me-2"></i>Coin</h5>
                    <ul className="list-unstyled p-3" style={{lineHeight:"2"}}>
                    <li>Understanding mutual funds and Coin</li>
                    <li>Coin app</li>
                    <li>Coin web</li>
                    <li>Transactions and reports</li>
                    <li>National Pension Scheme (NPS)</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}