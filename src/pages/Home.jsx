import React, { useEffect } from "react";

export default function Home() {
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
              <h1 className="display-3 text-primary mb-3 animated slideInDown">
                Come to Peace Travel
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Come chase horizons across the Himalayas, witness the majesty of
                Nanga Parbat, and breathe in the Karakoram.
              </p>
              {/* <div className="position-relative w-75 mx-auto animated slideInDown">
                <input
                  className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Eg: Hunza"
                />
                <button
                  type="button"
                  className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                  style={{ marginTop: 7 }}
                >
                  Search
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: 400 }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/about-copy.jpeg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to <span className="text-primary">UTEX Travel</span>
              </h1>
              <p className="mb-4">
                UTEX isn't just a tour company — we're your gateway to the wild,
                raw beauty of northern Pakistan.
              </p>
              <p className="mb-4">
                From the snow-capped peaks of Skardu to the timeless charm of
                Hunza, we craft unforgettable journeys that blend adventure,
                culture, and comfort. Whether you're chasing glaciers, exploring
                ancient forts, or sipping chai with locals in a remote valley,
                UTEX makes it real — and seamless.
              </p>
              <p className="mb-4">
                Our team is made up of locals who know every shortcut, every
                hidden gem, and every story the mountains have to offer. With
                us, you're not just a tourist — you're a traveler, an explorer,
                a welcome guest in places most people only see on Instagram.
              </p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0 font-bold">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    First Class Flights
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0 font-bold">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Handpicked Hotels
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0 font-bold">
                    <i className="fa fa-arrow-right text-primary me-2" />5 Star
                    Accommodations
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0 font-bold">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Latest Model Vehicles
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0 font-bold">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    150 Premium City Tours
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0 font-bold">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    24/7 Service
                  </p>
                </div>
              </div>
              {/* <a className="btn btn-primary py-3 px-5 mt-2" href="">
                Read More
              </a> */}
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
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
      {/* Destination Start */}
      <div className="container-xxl py-5 destination">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Destination
            </h6>
            <h1 className="mb-5">Popular Destination</h1>
          </div>
          <div className="row g-3">
            <div className="col-lg-7 col-md-6">
              <div className="row g-3">
                <div
                  className="col-lg-12 col-md-12 wow zoomIn"
                  data-wow-delay="0.1s"
                >
                  <a
                    className="position-relative d-block overflow-hidden"
                    href=""
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/skardu.png"
                      alt=""
                    />
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      Skardu
                    </div>
                  </a>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow zoomIn"
                  data-wow-delay="0.3s"
                >
                  <a
                    className="position-relative d-block overflow-hidden"
                    href=""
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/deosai.png"
                      alt=""
                    />
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      Deosai
                    </div>
                  </a>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow zoomIn"
                  data-wow-delay="0.5s"
                >
                  <a
                    className="position-relative d-block overflow-hidden"
                    href=""
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/fairy-meadows.png"
                      alt=""
                    />
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      Fairy Meadows
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 wow zoomIn"
              data-wow-delay="0.7s"
              style={{ minHeight: 350 }}
            >
              <a
                className="position-relative d-block h-100 overflow-hidden"
                href=""
              >
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/hunza.png"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  Hunza
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Destination Start */}
      {/* Package Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Packages
            </h6>
            <h1 className="mb-5">Awesome Packages</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp d-flex"
              data-wow-delay="0.1s"
            >
              <div className="package-item h-100">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="assets/img/skardu-autumn.png"
                    alt="Skardu"
                    style={{ height: 240, width: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="d-flex border-bottom">
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    Skardu
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt text-primary me-2" />8 days
                  </small>
                </div>
                <div className="text-center p-4">
                  <p>
                    Autumn special — 8 days through golden Skardu: Shigar Fort,
                    Upper Kachura, Deosai, and turquoise lakes framed by fiery
                    poplars.
                  </p>
                  <div className="d-flex justify-content-center mb-2">
                    <a
                      href="/packages?selected=skardu#packages"
                      className="btn btn-sm btn-primary px-3"
                      style={{ borderRadius: "30px" }}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp d-flex"
              data-wow-delay="0.3s"
            >
              <div className="package-item h-100">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="assets/img/hunza-autumn.png"
                    alt="Hunza"
                    style={{ height: 240, width: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="d-flex border-bottom">
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    Hunza
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt text-primary me-2" />8 days
                  </small>
                </div>
                <div className="text-center p-4">
                  <p>
                    Autumn in Hunza — 8 days of golden valleys: Karimabad,
                    Attabad Lake, Passu Cones, and warm village stays under
                    crisp skies.
                  </p>
                  <div className="d-flex justify-content-center mb-2">
                    <a
                      href="/packages?selected=hunza#packages"
                      className="btn btn-sm btn-primary px-3"
                      style={{ borderRadius: "30px" }}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp d-flex"
              data-wow-delay="0.5s"
            >
              <div className="package-item h-100">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="assets/img/fairy-meadows.png"
                    alt="Fairy Meadows"
                    style={{ height: 240, width: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="d-flex border-bottom">
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    Fairy Meadows
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt text-primary me-2" />8 days
                  </small>
                </div>
                <div className="text-center p-4">
                  <p>
                    Alpine meadows under Nanga Parbat—quiet trails, starlit
                    nights, and the feeling of being on the edge of the world.
                  </p>
                  <div className="d-flex justify-content-center mb-2">
                    <a
                      href="/packages?selected=fairy#packages"
                      className="btn btn-sm btn-primary px-3"
                      style={{ borderRadius: "30px" }}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Package End */}
      {/* Booking Start */}
      <div
        className="container-xxl py-5 wow fadeInUp"
        data-wow-delay="0.1s"
        id="online-booking"
      >
        <div className="container">
          <div className="booking p-5">
            <div className="row g-5 align-items-center">
              <div className="col-md-6 text-white">
                <h6 className="text-white text-uppercase">Booking</h6>
                <h1 className="text-white mb-4">Online Booking</h1>
                <p className="mb-4">
                  Book your next getaway in minutes—search real-time
                  availability, compare options, and lock in your trip with
                  instant confirmation. No call centers, no waiting, just clear
                  prices, secure checkout, and e-tickets delivered to your
                  inbox.
                </p>
                <p className="mb-4">
                  Plans changed? Most bookings include flexible dates or easy
                  cancellations, and our support team is here 24/7 if you need a
                  hand. From weekend escapes to once-in-a-lifetime adventures,
                  we make planning simple so you can enjoy the journey.
                </p>
              </div>
              <div className="col-md-6">
                <h1 className="text-white mb-4">Customize Your Tour</h1>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-transparent"
                          id="name"
                          placeholder="Name"
                        />
                        <label htmlFor="name">Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-transparent"
                          id="country"
                          placeholder="Country"
                        />
                        <label htmlFor="name">Country</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control bg-transparent"
                          id="email"
                          placeholder="Email"
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-transparent"
                          id="phone"
                          placeholder="Phone (Optional)"
                        />
                        <label htmlFor="email">Phone (Optional)</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control bg-transparent"
                          placeholder="Special Request"
                          id="message"
                          style={{ height: 100 }}
                          defaultValue={""}
                        />
                        <label htmlFor="message">Special Request</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-outline-light w-100 py-3"
                        type="submit"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking Start */}
      {/* Process Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Process
            </h6>
            <h1 className="mb-5">3 Easy Steps</h1>
          </div>
          <div className="row gy-5 gx-4 justify-content-center">
            <div
              className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="position-relative border border-primary pt-5 pb-4 px-4 h-100">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa fa-globe fa-3x text-white" />
                </div>
                <h5 className="mt-4">Choose A Destination</h5>
                <hr className="w-25 mx-auto bg-primary mb-1" />
                <hr className="w-50 mx-auto bg-primary mt-0" />
                <p className="mb-0">
                  Browse places by season, budget, and vibe. See real traveler
                  photos, rough trip costs, and the best time to go—so
                  shortlisting feels easy, not overwhelming.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="position-relative border border-primary pt-5 pb-4 px-4 h-100">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa fa-dollar-sign fa-3x text-white" />
                </div>
                <h5 className="mt-4">Pay Online</h5>
                <hr className="w-25 mx-auto bg-primary mb-1" />
                <hr className="w-50 mx-auto bg-primary mt-0" />
                <p className="mb-0">
                  Check out securely with transparent pricing and no hidden
                  fees. Pay via card, bank transfer, or e-wallet, and get
                  instant confirmation and receipts in your inbox.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="position-relative border border-primary pt-5 pb-4 px-4 h-100">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa fa-plane fa-3x text-white" />
                </div>
                <h5 className="mt-4">Fly Today</h5>
                <hr className="w-25 mx-auto bg-primary mb-1" />
                <hr className="w-50 mx-auto bg-primary mt-0" />
                <p className="mb-0">
                  Your e-tickets and itinerary arrive right away, plus reminders
                  before you go. Need to change plans? Message us 24/7 and we'll
                  sort it out fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Process Start */}
      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Travel Team
            </h6>
            <h1 className="mb-5">Meet Our Team</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="assets/img/team-1.jpg"
                    alt=""
                  />
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Bilal Hunzai</h5>
                  <small>Founder</small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="assets/img/team-2.jpg"
                    alt=""
                  />
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Hamza Sadiq</h5>
                  <small>Co-Founder</small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="assets/img/team-3.jpg"
                    alt=""
                  />
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Ali Husnain</h5>
                  <small>Tour Guide</small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="assets/img/team-4.jpg"
                    alt=""
                  />
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Javeria Bilal</h5>
                  <small>Tour Guide</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
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
                everything—flights, hotels, even a sunrise Jeep in Skardu. I
                just showed up and had the best week of my year.
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
                spots for photos. Smooth transfers, no surprises—just a
                perfectly paced itinerary.
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
                kind. They even rearranged a day last‑minute when weather
                changed—zero stress for me.
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
                Great value and thoughtful touches—welcome notes, local
                restaurant tips, and a surprise boat ride for our anniversary.
                Thank you, Bilal and Hamza—we felt genuinely looked after.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  );
}
