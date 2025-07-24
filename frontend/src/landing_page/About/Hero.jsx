import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Title Section */}
      <div className="row justify-content-center text-center mt-5 px-3 ">
        <div className="col-lg-10">
          <h1 className="fs-2 fw-semibold mb-4">
            We pioneered the discount broking model in India
            <br />
            <span className="text-primary">
              Now, we are breaking ground with our technology.
            </span>
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div
        className="row border-top mt-5 pt-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
      >
        <div className="col-md-6 mb-4 px-4">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            <strong> Zerodha</strong>, a combination of Zero and "Rodha", the
            Sanskrit word for barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over <strong>1+ Crore clients</strong> place millions of orders every
            day through our powerful ecosystem of investment platforms,
            contributing over <strong>15% of all Indian retail trading volumes</strong>.
          </p>
        </div>

        <div className="col-md-6 mb-4 px-4">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="#" style={{ textDecoration: "none" }}>
              <strong>Rainmatter</strong>
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
