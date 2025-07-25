import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>

      {/* Pricing Cards Section */}
      <div className="row p-4 mt-4 text-center">
        <div className="col-12 col-md-4 p-4">
          <img src="media/images/pricingEquity.svg" className="img-fluid mb-3" alt="Equity" />
          <h1 className="fs-4">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
          </p>
        </div>

        <div className="col-12 col-md-4 p-4">
          <img src="media/images/intradayTrades.svg" className="img-fluid mb-3" alt="Intraday" />
          <h1 className="fs-4">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity.
          </p>
        </div>

        <div className="col-12 col-md-4 p-4">
          <img src="media/images/pricingEquity.svg" className="img-fluid mb-3" alt="Mutual Funds" />
          <h1 className="fs-4">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
