import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRouter = ({ children }) => {
  const { user, spinner } = useContext(AuthContext);
  const location = useLocation();
  if (spinner) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
    </div>
  );
};

export default PrivateRouter;
