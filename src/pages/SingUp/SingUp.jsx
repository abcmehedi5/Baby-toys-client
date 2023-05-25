import React, { useContext, useState } from "react";
import "./singup.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useErrorAlert, useSuccessAlert } from "../../CustomHook/UseSweetAlert";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../CustomHook/useTitle";

const SingUp = () => {
  useTitle("singup");
  const [loading, setLoading] = useState(false);
  // authentication context
  const { createUserEmail, googleSingin, updateUserProfile } =
    useContext(AuthContext);
  // submit registrtion
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const photoUrl = from.photoUrl.value;
    const password = from.password.value;
    const confirmPassword = from.confirm.value;

    // validate------------------
    // name validate
    if (!/(?=.*[a-z])/.test(name)) {
      useErrorAlert("Your name not valid");
      setLoading(false);
      return;
    }
    // email validate

    // password validate
    if (password !== confirmPassword) {
      useErrorAlert("Your password did not match");
      setLoading(false);
      return;
    } else if (password.length < 6) {
      useErrorAlert("password must be 6 characters or longer");
      setLoading(false);
      return;
    }

    // user create email and password
    createUserEmail(email, password)
      .then((result) => {
        const user = result.user;
        profileUpdate(user, name, photoUrl);
        useSuccessAlert("Registration Successfull ");
        setLoading(false);
        from.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        useErrorAlert(errorMessage);
        setLoading(false);
      });
  };

  // update user profile

  const profileUpdate = (user, name, photoUrl) => {
    updateUserProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then((result) => {})
      .catch((error) => {
        sweetError(error.message);
      });
  };

  // handle google singin
  const handleGoogleSignIn = () => {
    googleSingin()
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        sweetError(errorMessage);
      });
  };
  return (
    <div className="m-4">
      <div className="singup-container">
        <form onSubmit={handleSubmit} className="w-100">
          <h4 className="text-center text-primary mb-4">Sing Up</h4>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              required
              className=" form-control"
              placeholder="full name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              required
              className=" form-control"
              placeholder="email"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="photoUrl"
              required
              className=" form-control"
              placeholder="Photo url"
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              required
              className=" form-control"
              placeholder="password"
            />
          </div>
          <div>
            <input
              type="password"
              name="confirm"
              required
              className=" form-control"
              placeholder="confirm password"
            />
          </div>
          <small>
            Already have an account?
            <Link to={"/login"}>
              <small>Login</small>
            </Link>
          </small>

          {/* spinner loading   */}
          {loading && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <button type="submit" className="w-100 btn btn-info mt-3">
            Submit
          </button>
        </form>
        <button
          onClick={() => handleGoogleSignIn()}
          className="w-100  mt-2 google-login "
        >
          <FcGoogle size={25} /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SingUp;
