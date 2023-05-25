import React, { useEffect, useState } from "react";
import CategoryDetails from "./CategoryDetails";
import './Category.css'
const Category = () => {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    fetch("/Category.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);
  return (
    <div className="container">
      <div className="d-lg-flex justify-content-center align-items-center gap-1 mt-5">
        {categorys.map((category) => (
          <CategoryDetails
            category={category}
            key={category._id}
          ></CategoryDetails>
        ))}
      </div>
    </div>
  );
};

export default Category;
