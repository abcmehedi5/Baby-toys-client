import { Rating } from "@smastrom/react-rating";
import React from "react";

const Feedback = () => {
  return (
    <div className="container">
      <h3 className="text-center mt-5">Feedback</h3>
      <div className="card-group gap-3 mt-3 mb-5 text-center">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Kingo Bomis</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
            </p>
            <Rating
              readOnly
              className="mx-auto"
              style={{ maxWidth: 100 }}
              value={5}
            />
            <img
              style={{ height: "70px", width: "70px" }}
              className="img img-fluid rounded-circle mt-3"
              src="https://us.123rf.com/450wm/fizkes/fizkes1911/fizkes191102560/134439661-happy-caucasian-guy-wearing-glasses-and-white-t-shirt-isolated-on-grey-studio-background-look-at.jpg?ver=6"
              alt=""
            />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Sofia Alvar</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
            </p>
            <Rating
              readOnly
              className="mx-auto"
              style={{ maxWidth: 100 }}
              value={5}
            />
            <img
              style={{ height: "70px", width: "70px" }}
              className="img img-fluid rounded-circle mt-3"
              src="https://us.123rf.com/450wm/fizkes/fizkes1911/fizkes191102560/134439661-happy-caucasian-guy-wearing-glasses-and-white-t-shirt-isolated-on-grey-studio-background-look-at.jpg?ver=6"
              alt=""
            />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Kingo Bomis</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
            </p>
            <Rating
              readOnly
              className="mx-auto"
              style={{ maxWidth: 100 }}
              value={5}
            />
            <img
              style={{ height: "70px", width: "70px" }}
              className="img img-fluid rounded-circle mt-3"
              src="https://us.123rf.com/450wm/fizkes/fizkes1911/fizkes191102560/134439661-happy-caucasian-guy-wearing-glasses-and-white-t-shirt-isolated-on-grey-studio-background-look-at.jpg?ver=6"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
