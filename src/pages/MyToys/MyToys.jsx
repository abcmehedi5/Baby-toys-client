import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useErrorAlert, useSuccessAlert } from "../../CustomHook/UseSweetAlert";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../CustomHook/useTitle";

const MyToys = () => {
  useTitle("My toys");
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [toy, setToy] = useState({});
  // sort my wiht price toy
  const [toySort, setToySort] = useState("");

  useEffect(() => {
    fetch(`https://baby-toys-server.vercel.app/myToys?email=${user.email}&sort=${toySort}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [toySort]);

  //   delete toys

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          fetch(`https://baby-toys-server.vercel.app/deleteToy/${id}`)
            .then((res) => res.json())
            .then((data) => {
              useSuccessAlert("Toy delete successfull");
              const toysfilter = toys.filter((toy) => toy._id !== id);
              setToys(toysfilter);
            })
        );
      }
    });
  };
  // single toy data load
  const handleOpenModal = (id) => {
    fetch(`https://baby-toys-server.vercel.app/toy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
      });
  };

  // toy update option...................................................start

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const detailDescription = form.detailDescription.value;
    const toyUpdate = {
      price,
      availableQuantity,
      detailDescription,
    };

    fetch(`https://baby-toys-server.vercel.app/toy/${toy._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(toyUpdate),
    })
      .then((res) => res.json())
      .then((date) => {
        useSuccessAlert("update successfull");
      })
      .catch((error) => {
        useErrorAlert("updaet not found");
      });
  };

  // toy update option...................................................end

  return (
    <div className="container">
      <h3 className="mb-5 text-center">My Toys </h3>
      <div className="mb-3">
        <button
          onClick={() => setToySort("asc")}
          className={` ${
            toySort == "asc" && "btn-danger"
          } btn btn-primary me-2`}
        >
          ascending
        </button>
        <button
          onClick={() => setToySort("desc")}
          className={` ${
            toySort == "desc" && "btn-danger"
          } btn btn-primary me-2`}
        >
          decending
        </button>
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
              <th scope="col">Action</th>
            </tr>
          </thead>
          {toys.map((toy) => (
            <tbody key={toy._id}>
              <tr>
                <td>{toy?.name}</td>
                <td>{toy?.sellerName}</td>
                <td>{toy?.sellerEmail}</td>
                <td>{toy?.price}</td>
                <td>{toy?.subCategory}</td>
                <td>{toy?.availableQuantity}</td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(toy._id);
                    }}
                    className=" btn btn-danger me-1"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => handleOpenModal(toy._id)}
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@mdo"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {/* // toy update option...................................................start */}
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Update {toy?.name}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleUpdate}>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="price"
                      defaultValue={toy.price}
                      id="recipient-name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Available quantity
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="availableQuantity"
                      defaultValue={toy.availableQuantity}
                      id="recipient-name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message-text" className="col-form-label">
                      Details Description
                    </label>
                    <textarea
                      className="form-control"
                      name="detailDescription"
                      defaultValue={toy.detailDescription}
                      id="message-text"
                    ></textarea>
                  </div>
                  <div className="modal-footer">
                    <button
                      onClick={() => handleUpdate()}
                      type="submit"
                      className="btn btn-primary"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // toy update option...................................................end */}
    </div>
  );
};

export default MyToys;
