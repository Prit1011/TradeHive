import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5 pt-5 ">
        <div className="row text-start text-md-left">
          {/* Logo + Copy */}
          <div className="col-12 col-md-3 mb-4 ">
            <img
              src="media/images/logo.svg"
              className="img-fluid mb-2"
              style={{ maxWidth: "150px" }}
              alt="Logo"
            />
            <p className="text-muted small">
              &copy;  2025, TradeHive by Prit Gandhi. All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div className="col-6 col-md-3 mb-4 ">
            <p className="fw-bold">Company</p>
            <ul className="list-unstyled small">
              <li className="mb-3"><a href="" style={{ textDecoration: "none", color:"black" }}>About</a></li>
              <li className="mb-3"><a href=""style={{ textDecoration: "none", color:"black" }}>Products</a></li>
              <li className="mb-3"><a href="" style={{ textDecoration: "none", color:"black" }}>Pricing</a></li>
              <li className="mb-3"><a href="" style={{ textDecoration: "none", color:"black" }}>Referral programme</a></li>
              <li className="mb-3"><a href="" style={{ textDecoration: "none", color:"black" }}>Careers</a></li>
              <li className="mb-3"><a href="" style={{ textDecoration: "none", color:"black" }}>Zerodha.tech</a></li>
              <li className="mb-3"><a href="" style={{ textDecoration: "none", color:"black" }}>Press & media</a></li>
              <li className="mb-3"><a href="" style={{ textDecoration: "none", color:"black" }}>Zerodha cares (CSR)</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-6 col-md-3 mb-4">
            <p className="fw-bold">Support</p>
            <ul className="list-unstyled small">
              <li className="mb-3"><a href=""style={{ textDecoration: "none", color:"black" }}>Contact</a></li>
              <li className="mb-3"><a href=""style={{ textDecoration: "none", color:"black" }}>Support portal</a></li>
              <li className="mb-3"><a href=""style={{ textDecoration: "none", color:"black" }}>Z-Connect blog</a></li>
              <li className="mb-3"><a href=""style={{ textDecoration: "none", color:"black" }}>List of charges</a></li>
              <li className="mb-3"><a href=""style={{ textDecoration: "none", color:"black" }}>Downloads & resources</a></li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="col-12 col-md-3 mb-4">
            <p className="fw-bold">Account</p>
            <ul className="list-unstyled small">
              <li className="mb-3"><a href=""style={{ textDecoration: "none", color:"black" }} >Open an account</a></li>
              <li className="mb-3"><a href=""style={{ textDecoration: "none", color:"black" }} >Fund transfer</a></li>
              <li className="mb-3"><a href=""style={{ textDecoration: "none", color:"black" }} >60 day challenge</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-5 text-muted small" style={{ lineHeight: "1.7", fontSize:"10px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India...
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES...
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs... create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
