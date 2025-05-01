import React from 'react';

function Footer() {
    return ( 
        <footer style={{background: "rgb(245,245,245)"}} className='border-top'> 
        <div className='container'>
          <div className='row p-5'>

            <div className='col-3 p-3 '> 
                <img src='media/images/ProImg/logo.svg' alt='logoImg'  style={{width: '60%'}}></img>
                <p className='mt-3'>© 2010 - 2025, Zerodha Broking Ltd.<br></br>
                All rights reserved</p>
                <i class="fa-brands fa-x-twitter fs-5 me-5"></i>
                <i class="fa-brands fa-square-facebook fs-5 me-5"></i>
                <i class="fa-brands fa-instagram fs-5 me-5"></i>
                <i class="fa-brands fa-linkedin-in fs-5 me-5"></i>
                <br></br>
                <br className='border-bottom'></br>
                <i class="fa-brands fa-youtube me-5 fs-5"></i>
                <i class="fa-brands fa-whatsapp me-5 fs-5"></i>
                <i class="fa-brands fa-telegram me-5 fs-5"></i>
            </div>

            <div className='col-3 p-3'> 
                <h3>Company</h3>
                <ul className='list-unstyled'>
                    <li>About</li>
                    <li>Products</li>
                    <li>Pricing</li>  
                    <li>Referral programme</li>
                    <li>Careers</li> 
                    <li>Zerodha.tech</li> 
                    <li>Open source</li> 
                    <li>Press & media</li> 
                    <li>Zerodha Cares (CSR)</li> 
                </ul>
            </div>

            <div className='col-3 p-3'>
                <h3>Support</h3>
                <ul className='list-unstyled'>
                    <li>Contact us</li>
                    <li>Support portal</li>
                    <li>Z-Connect blog</li>
                    <li>List of charges</li>
                    <li>Downloads & resources</li>
                    <li>Videos</li>
                    <li>Market overview</li>
                    <li>How to file a complaint?</li>
                    <li>Status of your complaints</li>
                </ul>
            </div>

            <div className='col-3 p-3'>
                <h3>Account</h3>
                <p className='fs-6 mt-3'>Open an account <br></br> Fund tranfer</p>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
                <p style={{fontSize: '14px'}}>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF

            <br></br>
            <br></br>

            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances

            
            <br></br>
            <br></br>

            Smart Online Dispute Resolution | Grievances Redressal Mechanism

            Investments in securities market are subject to market risks; read all the related documents carefully before investing.

            <br></br>
            <br></br>

            Attention investors: 1. Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2. Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3. Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.

            <br></br>
            <br></br>

            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
            </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;