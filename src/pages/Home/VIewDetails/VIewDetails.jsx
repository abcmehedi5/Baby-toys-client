import { Rating } from "@smastrom/react-rating";
import React from "react";
import ReactImageMagnify from "react-image-magnify";
import { Link, useLoaderData } from "react-router-dom";

const VIewDetails = () => {
  const toy = useLoaderData();
  const {
    availableQuantity,
    detailDescription,
    image,
    name,
    price,
    rating,
    sellerEmail,
    sellerName,
    subCategory,
    _id,
  } = toy;
  return (
    <div className="container mt-3 mb-3">
      <div className="row d-flex align-items-center">
        <div className="col-md-5">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: image,
              },
              largeImage: {
                src: image,
                width: 1200,
                height: 1800,
              },
            }}
          />
        </div>
        <div className="col-md-6 mx-auto">
          <h3>{name}</h3>

          <h4>$ {price}</h4>

          <p>
            Category: <strong>{subCategory}</strong>
          </p>
          <p>
            Available quantity: <strong>{availableQuantity}</strong>
          </p>
          <p>
            Seller name: <strong>{sellerName}</strong>
          </p>
          <p>
            Seller email: <strong> {sellerEmail}</strong>
          </p>
          <p>
            <Rating style={{ maxWidth: 100 }} value={Math.round(rating)} />
          </p>
          <p>{detailDescription}</p>
          <Link>
            <button className=" btn btn-info text-white ms-2">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VIewDetails;
