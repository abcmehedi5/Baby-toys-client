import React, { useContext, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useErrorAlert, useSuccessAlert } from "../../CustomHook/UseSweetAlert";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../CustomHook/useTitle";
const Login = () => {
  useTitle('login')
  const [loading, setLoading] = useState(false);
  // authentication context
  const { loginUser, googleSingin, forgotPassword } = useContext(AuthContext);

  // private router info
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // handle login submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    loginUser(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;

        // navigate(from, { replace: true });
        navigateNow();
        useSuccessAlert("Login Successfull!!");
        setLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoading(false);
        useErrorAlert(errorMessage);
      });
  };

  // handle google singin
  const handleGoogleSignIn = () => {
    googleSingin()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        useErrorAlert(errorMessage);
      });
  };

  // forgot password useRef
  const emailValue = useRef(null);
  const forgotEmail = emailValue.current?.value;
  const passwordForgot = () => {
    forgotPassword(forgotEmail)
      .then(() => {
        sweetSuccess("check your email and reset your password");
      })
      .catch((error) => {
        const errorMessage = error.message;
        useErrorAlert(errorMessage);
      });
  };

  // navigate
  const navigateNow = () => {
    setTimeout(() => {
      navigate(from, { replace: true });
    }, 1);
  };
  return (
    <div className="m-4">
      <div className="singup-container">
        <form onSubmit={handleSubmit} className="w-100">
          <h4 className="text-center text-primary mb-4">Login</h4>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              required
              className=" form-control"
              placeholder="email"
              ref={emailValue}
            />
          </div>
          <div>
            <input
              required
              type="password"
              name="password"
              className=" form-control"
              placeholder="password"
            />
          </div>
          <div className="d-flex justify-content-between mt-2">
            <small>
              New to baby toys ?
              <Link to={"/singup"}>
                <small> Create New Account</small>
              </Link>
            </small>
            <p
              onClick={() => {
                passwordForgot();
              }}
            >
              <Link>
                <small>Forgot password</small>
              </Link>
            </p>
          </div>

          {/* loading  */}
          {loading && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          <button type="submit" className="w-100 btn btn-info mt-3">
            Login
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

export default Login;
