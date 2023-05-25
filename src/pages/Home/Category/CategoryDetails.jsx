import React from "react";

const CategoryDetails = ({ category }) => {
  const { Category_name, image } = category;
  return (
    <div
      className="card text-center p-2 category-card"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"     
    >
      <img className="img img-fluid rounded-circle" src={image} alt="" />
      <h5>{Category_name}</h5>
    </div>
  );
};

export default CategoryDetails;
