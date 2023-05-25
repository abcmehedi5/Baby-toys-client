import React from "react";

const Banner = () => {
  return (
    <div className="border bg-info">
      <div className="row container d-flex m-auto justify-content-around align-items-center">
        <div className="col-md-5">
          <h2 className="text-white">Discover the Perfect Toys for Every Adventure</h2>
          <p className="text-secondary">
            Ignite your child's imagination with our collection of high-speed
            car toys. From sleek race cars to rugged off-road vehicles, we have
            the perfect toys to fuel their adventurous spirit.
          </p>
          <button className="btn btn-danger">Get Started</button>
        </div>
        <div className="col-md-6">
          <img
            className="img img-fluid"
            src="https://i.ibb.co/4YbdKpR/image-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
