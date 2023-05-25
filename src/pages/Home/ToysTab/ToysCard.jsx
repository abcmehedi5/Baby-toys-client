import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useSuccessAlert } from "../../../CustomHook/UseSweetAlert";
import Swal from "sweetalert2";

const ToysCard = ({ toys }) => {
  const { user } = useContext(AuthContext);
  const { image, name, price, rating, sellerEmail, subCategory, _id } = toys;
  const handleViewDetails = () => {
    if (!user) {
      Swal.fire({
        title: "Please log in to view details.",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "OK",
      }).then((result) => {
        navigate("/login");
      });
    }
  };
  return (
    <div className="col-md-3 mb-3">
      <div className="card toys-card position-relative ">
        <div className="card-body">
          <img className="img img-fluid" src={image} alt="icon" />
          <div>
            <div className="d-flex justify-content-between">
              <h6 className="card-title fw-bold">{name}</h6>
              <h6 className="card-title text-secondary">$ {price}</h6>
            </div>
            <Rating
              style={{ maxWidth: 100 }}
              readOnly
              value={Math.round(rating)}
            />
          </div>
          <Link onClick={handleViewDetails} to={`/toy/${_id}`}>
            <button className="  btn-toys btn btn-info ">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
