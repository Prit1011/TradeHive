import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Text section */}
        <div className="col-md-6 col-12 px-3 px-md-5 text-center text-md-start mb-4 mb-md-0">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <a href={learnMore}>Learn More</a>
        </div>

        {/* Image section */}
        <div className="col-md-6 col-12 text-center">
          <img src={imageURL} alt="Product" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
