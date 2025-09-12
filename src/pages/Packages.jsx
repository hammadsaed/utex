import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Packages() {
  const packagesData = {
    skardu: {
      name: "Skardu",
      days: 8,
      itinerary: [
        { plan: "Arrival in Islamabad", residence: "Hotel" },
        {
          plan: "Drive to Chilas via Karakoram Highway (8-9 hrs), enjoy scenic autumn views",
          residence: "Hotel",
        },
        {
          plan: "Drive to Skardu, en route visit the mesmerizing Shangrila Resort and Lower Kachura Lake",
          residence: "Hotel",
        },
        {
          plan: "Explore Skardu, visit Satpara Lake and Skardu Fort surrounded by golden autumn hues",
          residence: "Hotel",
        },
        {
          plan: 'Day trip to Deosai National Park, witness the autumn transformation of the "Land of Giants"',
          residence: "Hotel",
        },
        {
          plan: "Visit Khaplu Valley, stroll through apricot orchards with autumn foliage",
          residence: "Hotel",
        },
        {
          plan: "Drive back to Chilas, enjoy the picturesque autumn scenery",
          residence: "Hotel",
        },
        { plan: "Drive back to Islamabad, tour ends", residence: "Hotel" },
      ],
    },
    hunza: {
      name: "Hunza",
      days: 8,
      itinerary: [
        { plan: "Arrival in Islamabad", residence: "Hotel" },
        {
          plan: "Drive to Naran via Babusar Pass (8-10 hrs)",
          residence: "Hotel",
        },
        {
          plan: "Drive to Hunza Valley, en route visit Rakaposhi Viewpoint",
          residence: "Hotel",
        },
        {
          plan: "Explore Karimabad, visit Baltit and Altit Forts",
          residence: "Hotel",
        },
        {
          plan: "Drive to Khunjerab Pass (highest paved border crossing, 4,693m)",
          residence: "Hotel",
        },
        {
          plan: "Visit Attabad Lake, Passu Cones, and Gulmit Village",
          residence: "Hotel",
        },
        {
          plan: "Drive back to Naran, free evening to relax",
          residence: "Hotel",
        },
        { plan: "Drive to Islamabad, tour ends", residence: "Hotel" },
      ],
    },
    fairy: {
      name: "Fairy Meadows",
      days: 8,
      itinerary: [
        { plan: "Arrive in Islamabad - Pakistan", residence: "Hotel" },
        {
          plan: "Drive to Chilas (461 km) 11-12 hours drive",
          residence: "Hotel",
        },
        {
          plan: "Drive & trek to Fairy Meadows (3300m) 6-7 hours",
          residence: "Camp",
        },
        {
          plan: "Trek to Base Camp (3500m) 6-7 hours walking",
          residence: "Camp",
        },
        {
          plan: "Trek back to Fairy Meadows 5-6 hours walking",
          residence: "Camp",
        },
        { plan: "Drive to Islamabad, 9-10 hours", residence: "Hotel" },
        { plan: "Sightseeing day in Islamabad", residence: "Hotel" },
        { plan: "Departure Day - Fly back home", residence: "Fly Out" },
      ],
    },
  };

  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState("fairy");

  // Sync selection from URL (e.g., /packages?selected=skardu#packages) and scroll
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const fromUrl = params.get("selected");
    if (fromUrl && packagesData[fromUrl]) {
      setSelectedKey(fromUrl);
    }
    const anchor = document.getElementById("packages");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.search, location.hash]);

  const selected = packagesData[selectedKey];

  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Packages
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
                    Packages
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Package Start */}
      <div className="container-xxl py-5" id="packages">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Packages
            </h6>
            <h1 className="mb-5">Local Packages</h1>
          </div>

          <div className="row g-4">
            {/* Left selector card */}
            <div className="col-lg-4">
              <div className="card shadow-sm h-100">
                <div className="card-header bg-primary text-white fw-semibold">
                  Tour Options
                </div>
                <div className="list-group list-group-flush">
                  {[
                    { key: "hunza", label: "Hunza" },
                    { key: "skardu", label: "Skardu" },
                    { key: "fairy", label: "Fairy Meadows" },
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => setSelectedKey(opt.key)}
                      className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${
                        selectedKey === opt.key ? "active" : ""
                      }`}
                      style={{
                        cursor: "pointer",
                        ...(selectedKey === opt.key ? {} : {}),
                      }}
                    >
                      <span>{opt.label}</span>
                      <i className="fa fa-arrow-right" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right details card */}
            <div className="col-lg-8">
              <div className="card shadow-sm h-100">
                <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                  <span className="fw-semibold">Itinerary</span>
                  <span className="badge bg-light text-primary">
                    {selected.name} • {selected.days} days
                  </span>
                </div>
                <div className="table-responsive">
                  <table className="table mb-0 align-middle">
                    <thead>
                      <tr>
                        <th style={{ width: 60 }}>Day</th>
                        <th>Plan</th>
                        <th style={{ width: 140 }}>Residence</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selected.itinerary.map((row, idx) => (
                        <tr key={idx}>
                          <td>
                            <span className="badge bg-primary">{idx + 1}</span>
                          </td>
                          <td>{row.plan}</td>
                          <td>{row.residence}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
    </div>
  );
}

export default Packages;
