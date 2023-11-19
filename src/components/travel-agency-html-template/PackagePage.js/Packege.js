import React from "react";
import { Link } from "react-router-dom";

export const Packege = ({
    destination, days, person, price, description
}) => {

    return (
        <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="package-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/package-2.jpg" alt="" />
                </div>
                <div className="d-flex border-bottom">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt text-primary me-2"></i>
                    {destination}
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt text-primary me-2"></i>
                    {days}
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user text-primary me-2"></i>
                    {person}
                  </small>
                </div>
                <div className="text-center p-4">
                  <h3 className="mb-0">{price}</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                  </div>
                  <p>{description}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <Link
                      href="#"
                      className="btn btn-sm btn-primary px-3 border-end"
                      style={{ bordeRadius: "30px 0 0 30px" }}
                    >
                      Read More
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-sm btn-primary px-3"
                      style={{ borderRadius: "0 30px 30px 0" }}
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
    );

};
