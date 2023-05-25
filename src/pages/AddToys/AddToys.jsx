import React, { useContext, useState } from "react";
import useTitle from "../../CustomHook/useTitle";
import { AuthContext } from "../../Providers/AuthProvider";
import { useErrorAlert, useSuccessAlert } from "../../CustomHook/UseSweetAlert";

const AddToys = () => {
  useTitle("add toys");
  const [selectedOption, setSelectedOption] = useState("");
  console.log({ selectedOption });
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const name = user?.displayName;
    const sellerName = form.sellerName.value;
    // const subCategory = form.subCategory.value;
    const subCategory = selectedOption;
    const price = form.price.value;
    const rating = form.rating.value;
    const sellerEmail = user?.email;
    const availableQuantity = form.availableQuantity.value;
    const detailDescription = form.detailDescription.value;
    const image = form.image.value;
    const toy = {
      name,
      sellerName,
      subCategory,
      price,
      rating,
      availableQuantity,
      detailDescription,
      sellerEmail,
      image,
    };

    console.log(toy);
    // post toy
    fetch("https://baby-toys-server.vercel.app/toys", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        useSuccessAlert("toy submit successfull");
        setLoading(false);
      })
      .catch((error) => {
        useErrorAlert(error);
      });
  };

  const handleOptionSelect = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="container mt-2 mb-5 w-50">
        <div className="mb-3">
          <input
            type="text"
            name="name"
            placeholder="Toy name"
            required
            className="form-control p-2"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="sellerEmail"
            placeholder="Seller Email"
            required
            defaultValue={user?.email}
            disabled
            className="form-control p-2"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="sellerName"
            placeholder="Seller Name"
            required
            defaultValue={user?.displayName}
            className="form-control p-2"
          />
        </div>
        {/* <div className="mb-3">
          <input
            type="text"
            name="subCategory"
            placeholder="Sub category"
            required
            className="form-control p-2"
          />
        </div> */}

        <div className="mb-3">
          <select
            name="subCategory"
            required
            className="form-control p-2"
            value={selectedOption}
            onChange={handleOptionSelect}
          >
            <option>Select Sub Category</option>
            <option value="truck">truck</option>
            <option value="sports car">sports car</option>
            <option value="vehicles">vehicles</option>
          </select>
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="price"
            placeholder="Price"
            required
            className="form-control p-2"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="rating"
            placeholder="Rating"
            required
            className="form-control p-2"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="availableQuantity"
            placeholder="Available Quantity"
            required
            className="form-control p-2"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="image"
            placeholder="Photo Url"
            required
            className="form-control p-2"
          />
        </div>

        <div className="mb-3">
          <textarea
            type="text"
            name="detailDescription"
            placeholder="Detail Description"
            required
            className=" p-5 form-control p-2"
            id="description"
          />
        </div>

        <button type="submit" className=" btn btn-primary w-100">
          {loading && (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          )}
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddToys;
