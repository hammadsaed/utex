import React from "react";

export default function Footer() {
  return (
    <div>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Company</h4>
              <a className="btn btn-link" href="/">
                About Us
              </a>
              <a className="btn btn-link" href="/">
                Contact Us
              </a>
              <a className="btn btn-link" href="/">
                Privacy Policy
              </a>
              <a className="btn btn-link" href="/">
                Terms &amp; Condition
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                Plot No. 260, Block C1, Nespak Society, Lahore
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                +92 307 4195452
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                exploreurgeto@gmail.com
              </p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                  href="https://www.facebook.com/share/1Gqkk8Banz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f fw-normal" />
                </a>
                <a
                  className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                  href="https://www.linkedin.com/in/utex-travel/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in fw-normal" />
                </a>
                <a
                  className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                  href="https://www.instagram.com/utex_travel?igsh=MTBjZXRsc2lsNTJqZw=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram fw-normal" />
                </a>
                <a
                  className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                  href="https://www.tiktok.com/@utetravel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-tiktok fw-normal" />
                </a>
                <a
                  className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
                  href="https://www.youtube.com/@utetravel4276"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube fw-normal" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Gallery</h4>
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="assets/img/package-1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="assets/img/package-2.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="assets/img/package-3.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="assets/img/package-2.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="assets/img/package-3.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="assets/img/package-1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{" "}
                <a className="border-bottom" href="#">
                  UTEX Travel
                </a>
                , All Right Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
  );
}
