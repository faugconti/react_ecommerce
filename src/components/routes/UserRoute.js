import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";

const UserRoute = ({ children, ...props }) => {
  const { user } = useSelector((state) => ({ ...state }));
  return user && user.token ? (
    <Route {...props}  />
  ) : (
    // <h1 className="text-danger">Loading...</h1>
    <LoadingToRedirect />
  );
};

export default UserRoute;
