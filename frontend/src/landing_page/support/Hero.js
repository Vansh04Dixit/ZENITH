export default function Hero (){
    return (
        <section style={{background:" rgb(56, 126, 209)",color:" white"}} className="p-5">
        <div className="container mt-5">
            <div className="row mt-5">

                <div className="col-6 mt-5">
                    <h3>Support Portal</h3>
                    <h3 className="mt-5 mb-4">Search for an answer or browse help topics to create a ticket</h3>
                    <input type="" style={{width:"550px"}} className="p-2" placeholder="Eg: how do i activate F&O, Why is my order getting rejected..."></input>
                    <div className="d-flex mt-3 ">
                        <p className="me-2">Track account opening</p>
                        <p className="me-2">Track segment activation</p>
                        <p>Intraday margins</p>
                    </div>
                </div>

                <div className="col-6 mt-5">
                    <h3>Featured</h3>
                    <div className="p-4" style={{color:"white"}}>
                    <h5 className="mt-3">1. Change in expiry day of NSE derivative contracts from April 04, 2025 [Withheld]</h5>
                    <h5 className="mt-4">2. Latest Intraday leverages and Square-off timings</h5 >
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}