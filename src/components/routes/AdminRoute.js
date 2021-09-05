import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
import { currentAdmin } from "../../functions/auth";

const AdminRoute = ({ children, ...props }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (user && user.token) {
      currentAdmin(user.token)
        .then((res) => {
          console.log("CURRENT ADMIN RES", res);
          setOk(true);
        })
        .catch((err) => {
          setOk(false);
          console.log("ADMIN ROUTE ERR", err);
        });
    }
  }, [user]);

  return ok ? (
    <Route {...props}  />
  ) : (
    // <h1 className="text-danger">Loading...</h1>
    <LoadingToRedirect />
  );
}; 

export default AdminRoute;
