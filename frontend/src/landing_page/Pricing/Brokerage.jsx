import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        {/* Left Section */}
        <div className="col-12 col-md-8 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2", fontSize: "13px" }}
            className="text-muted"
          >
            <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged ₹20 per note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS): 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS): 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, each order will be charged ₹40 instead of ₹20.
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="col-12 col-md-4 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
