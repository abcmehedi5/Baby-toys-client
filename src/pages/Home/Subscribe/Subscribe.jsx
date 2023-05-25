import React from "react";
import { FaMailBulk } from "react-icons/fa";
const Subscribe = () => {
  return (
    <div className="container mb-5 pt-5 border-top">
      <div className="row">
        <div className="col-md-5 d-flex align-items-center gap-4">
          <FaMailBulk size={50} />
          <h2>
            Subscribe for Exclusive <br /> Sales & News
          </h2>
        </div>
        <div className="col-md-7">
          <div className="d-lg-flex justify-content-between">
            <p>Subscribe to the weekly newsletter for all the latest updates</p>
            <input
              required
              type="text"
              name="email"
              className=" form-control rounded-5 "
              placeholder="Your email"
            />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
