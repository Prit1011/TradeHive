import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="#" style={{textDecoration: "none"}}>Track Tickets</a>
      </div>

      <div className="row px-4 py-5 m-2  ">
        {/* Left Column */}
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            className="form-control my-3"
            placeholder="Eg. how do I activate F&O"
          />

          <div className="d-flex flex-column gap-2">
            <a href="#" style={{textDecoration: "none"}}>Track account opening</a>
            <a href="#" style={{textDecoration: "none"}}>Track segment activation</a>
            <a href="#" style={{textDecoration: "none"}}>Intraday margins</a>
            <a href="#" style={{textDecoration: "none"}}>Kite user manual</a>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 p-3 ">
          <h1 className="fs-3">Featured</h1>
          <ol className="ps-3">
            <li>
              <a href="#" style={{textDecoration: "none"}}>Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="#" style={{textDecoration: "none"}}>Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
