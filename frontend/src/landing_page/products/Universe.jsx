import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center mt-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="col-12 col-sm-6 col-lg-4 p-3">
            <img
              src="media/images/smallcaseLogo.png"
              className="img-fluid mb-2"
              alt="Platform Logo"
            />
            <p className="text-muted small">Thematic investment platform</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-3 mb-5">
        <button className="btn btn-primary fs-5 px-4">Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
