export default function RightImage({imgUrlRight , productName ,productDescription }){
    return(
        <div className="container mb-5">
            <div className="row mb-5">

                <div className="col-5 mt-3 p-5 ">
                    <h1>{productName}</h1>
                    <p className="mt-3">{productDescription}</p>
                    <a href="#">Learn more <i class="fa-solid fa-arrow-right"></i></a>
                    <br></br>
                    <br></br>
                </div>

                <div className="col-2"></div>

                <div className="col-5">
                    <img src={imgUrlRight} alt=""></img>
                </div>

            </div>
        </div>
    )
}