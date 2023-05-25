import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../CustomHook/useTitle";

const AllToys = () => {
  useTitle("All toys");
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    fetch("https://baby-toys-server.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);
  // search functinality
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="container">
      <h3 className="mb-5 text-center">Total Toys </h3>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by toy name"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      {toys.length > 0 ? (
        <table className="table table-hover">
          <thead>
            <tr
              style={{ backgroundColor: "#0FCFE8" }}
              className="text-secondary"
            >
              <th scope="col">Name</th>
              <th scope="col">Seller Name</th>
              <th scope="col">Seller Email</th>
              <th scope="col">Price</th>
              <th scope="col">Sub Category</th>
              <th scope="col">Quantity</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          {filteredToys.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">
                No search results found.
              </td>
            </tr>
          ) : (
            filteredToys.map((toy) => (
              <tbody key={toy._id}>
                <tr>
                  <td>{toy?.name}</td>
                  <td>{toy?.sellerName}</td>
                  <td>{toy?.sellerEmail}</td>
                  <td>{toy?.price}</td>
                  <td>{toy?.subCategory}</td>
                  <td>{toy?.availableQuantity}</td>
                  <td>
                    {/* <Link to={`/toy/${toys._id}`}> */}
                    <Link to={`/toy/${toy._id}`}>
                      <button className=" btn btn-info ">View Details</button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))
          )}
        </table>
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default AllToys;
