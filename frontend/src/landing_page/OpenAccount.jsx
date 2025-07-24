import React from "react";

function OpenAccount() {
  return (
    <div className="container p-3 p-md-5 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-8">
          <h1 className="mt-4">Open a Zerodha account</h1>
          <p className="mb-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
           <button
              className="btn btn-primary fs-5 w-90 px-5 w-md-25" >
              Sign up for free 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
