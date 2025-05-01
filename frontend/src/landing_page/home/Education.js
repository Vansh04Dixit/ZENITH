import React from "react";

function Education() {
  return (
    <div className="container p-5 mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/ProImg/education.svg" alt=""></img>
        </div>

        <div className="col-6">
          <h1>Free and open market education.</h1>

          <p className="mt-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a className="mb-3">
            Versity <i class="fa-solid fa-arrow-right"></i>
          </a>

          <br></br>

          <p className="mt-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a className="mb-3">
            TradingQ&A <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
