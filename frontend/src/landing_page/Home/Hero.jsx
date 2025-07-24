import React from "react";

function Hero() {
  return (
    <div className="container p-3 p-md-5 mb-5">
      <div className="row text-center justify-content-center">
        <div className="col-12 col-md-8">
          <img
            src="media/images/homeHero.png"
            alt="Hero Image"
            className="img-fluid mb-4"
          />
          <h1 className="mt-4">Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button
              className="btn btn-primary fs-5 w-90 px-5 w-md-25"
            >
              Sign up for free 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
