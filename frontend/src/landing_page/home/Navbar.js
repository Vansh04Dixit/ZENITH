import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg border-bottom fixed-top" style={{background: "#fff" , height: "70px"}}>
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img className="p-3" src="media/images/ProImg/logo.svg" alt="logoImg" style={{width: '30%'}}></img>
          </Link>
            <form class="d-flex" role="search">
                
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

              <li class="nav-item ">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  SignUp
                </Link>
              </li>

              <li class="nav-item active">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li class="nav-item active">
                <Link class="nav-link" to="/product">
                  Product
                </Link>
              </li>

              <li class="nav-item active">
                <Link class="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>

              <li class="nav-item active">
                <Link class="nav-link" to="/support">
                  Support
                </Link>
              </li>

              <li class="nav-item active">
                <Link class="nav-link" to="*">
                <i class="fa-solid fa-bars"></i>
                </Link>
              </li>
            </ul>
            </div>
            </form>
          </div>
      </nav>
  );
}

export default Navbar;
