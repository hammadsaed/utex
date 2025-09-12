import React, { useEffect } from "react";

function Services() {
  useEffect(() => {
    const $ = window.jQuery;
    if ($ && $.fn && $.fn.owlCarousel) {
      const $el = $(".testimonial-carousel");
      if ($el.length && !$el.hasClass("owl-loaded")) {
        $el.owlCarousel({
          autoplay: true,
          smartSpeed: 1000,
          center: true,
          margin: 24,
          dots: true,
          loop: true,
          nav: false,
          responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } },
        });
      }
    }
  }, []);

  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Services
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Services
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Services
            </h6>
            <h1 className="mb-5">Our Services</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp d-flex"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded pt-3 h-100">
                <div className="p-4">
                  <i className="fa fa-3x fa-plane text-primary mb-4" />
                  <h5>Flights</h5>
                  <p>
                    Find the right flight at the right time — fare alerts, hold
                    options, and real people to help if plans change.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp d-flex"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded pt-3 h-100">
                <div className="p-4">
                  <i className="fa fa-3x fa-bus text-primary mb-4" />
                  <h5>Transport</h5>
                  <p>
                    Airport shuttles and intercity buses arranged with clear
                    pickup details, tracked drivers, and no last-minute
                    surprises.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp d-flex"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded pt-3 h-100">
                <div className="p-4">
                  <i className="fa fa-3x fa-bed text-primary mb-4" />
                  <h5>Accommodation</h5>
                  <p>
                    Stays that fit your trip — boutique hotels, family
                    apartments, or villas — with flexible cancellation and
                    honest reviews.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp d-flex"
              data-wow-delay="0.7s"
            >
              <div className="service-item rounded pt-3 h-100">
                <div className="p-4">
                  <i className="fa fa-3x fa-utensils text-primary mb-4" />
                  <h5>Food</h5>
                  <p>
                    Reserve hard-to-get tables, join local food tours, or keep
                    it casual with street food — we'll handle dietary needs and
                    allergies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
      {/* Testimonial Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Testimonial
            </h6>
            <h1 className="mb-5">Our Clients Say!!!</h1>
          </div>
          <div className="owl-carousel testimonial-carousel position-relative">
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                alt="Client portrait"
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-1.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">Olivia Martin</h5>
              <p>Austin, USA</p>
              <p className="mb-0">
                From the first message to landing back home, Bilal mapped out
                everythingflights, hotels, even a sunrise Jeep in Skardu. I just
                showed up and had the best week of my year.
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                alt="Client portrait"
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-2.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">Luca Bianchi</h5>
              <p>Milan, Italy</p>
              <p className="mt-2 mb-0">
                Hamza was always reachable and our local guide knew the quiet
                spots for photos. Smooth transfers, no surprisesjust a perfectly
                paced itinerary.
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                alt="Client portrait"
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-3.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">Ava Thompson</h5>
              <p>Seattle, USA</p>
              <p className="mt-2 mb-0">
                I was nervous traveling solo, but their support was constant and
                kind. They even rearranged a day last3minute when weather
                changedzero stress for me.
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                alt="Client portrait"
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-4.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">Sofia Novak</h5>
              <p>Prague, Czech Republic</p>
              <p className="mt-2 mb-0">
                Great value and thoughtful toucheswelcome notes, local
                restaurant tips, and a surprise boat ride for our anniversary.
                Thank you, Bilal and Hamzawe felt genuinely looked after.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  );
}

export default Services;
