import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <img
          className="img img-fluid"
          src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif"
          alt="error"
        />
      </div>
      <h5 className="text-center"><Link to={'/'}>go to home page</Link> </h5>
    </div>
  );
};

export default ErrorPage;
