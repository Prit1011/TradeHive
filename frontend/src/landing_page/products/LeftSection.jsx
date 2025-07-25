import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image section */}
        <div className="col-md-6 col-12 mb-4 mb-md-0 text-center">
          <img src={imageURL} alt="Product" className="img-fluid" />
        </div>

        {/* Content section */}
        <div className="col-md-6 col-12 px-3 px-md-5 text-center text-md-start">
          <h1>{productName}</h1>
          <p>{productDesription}</p>

          <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center gap-3">
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore}>Learn More</a>
          </div>

          <div className="mt-3 d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center gap-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" className="img-fluid" style={{ maxWidth: "150px" }} />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" className="img-fluid" style={{ maxWidth: "150px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
