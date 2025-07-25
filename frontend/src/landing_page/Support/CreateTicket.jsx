import React from "react";

const topics = [
  {
    title: "Account Opening",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account",
      "Opening",
      "NRI Account Opening",
      "Charges at Zerodha",
      "Zerodha IDFC FIRST Bank 3-in-1 Account",
      "Getting Started",
    ],
  },
  // You can add more topics here if needed
];

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

        {/* Render 6 columns with same content */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="col-4 p-5 mt-2 mb-2">
            <h4>
              <i className="fa fa-plus-circle" aria-hidden="true"></i>{" "}
              {topics[0].title}
            </h4>
            {topics[0].links.map((linkText, index) => (
              <div key={index}>
                <a
                  href=""
                  style={{ textDecoration: "none", lineHeight: "2.5" }}
                >
                  {linkText}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
