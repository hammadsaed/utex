import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      {/* Spinner Start */}
      {/* <div
      id="spinner"
      className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div
        className="spinner-border text-primary"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div> */}
      {/* Spinner End */}

      {/* Topbar Start */}
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              {/* <small className="me-3 text-light">
                <i className="fa fa-map-marker-alt me-2" />
                College Block Allama Iqbal Town, Lahore, Pakistan
              </small> */}
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2" />
                +92 307 4195452
              </small>
              <small className="text-light">
                <i className="fa fa-envelope-open me-2" />
                exploreurgeto@gmail.com
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
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
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar & Hero Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand d-flex align-items-center p-0">
            <img
              src="/assets/img/logo.svg"
              alt="UTEX logo"
              className="img-fluid me-2"
              style={{ height: 48 }}
            />
            <div className="d-flex flex-column lh-1">
              <span className="fw-bold brand-text">UTEX Travel</span>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/About" className="nav-item nav-link">
                About
              </Link>
              <Link to="/Services" className="nav-item nav-link">
                Services
              </Link>
              <Link to="/Packages" className="nav-item nav-link">
                Packages
              </Link>
              <Link to="/Contact" className="nav-item nav-link">
                Contact
              </Link>
            </div>
            {/* <Link to="/" className="btn btn-primary rounded-pill py-2 px-4">
            Register
          </Link> */}
          </div>
        </nav>
      </div>
      {/* Navbar & Hero End */}
    </div>
  );
}

export default Header;
