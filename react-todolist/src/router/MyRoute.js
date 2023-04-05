import React, { useContext } from "react";
import { RouterContext } from "./MyBrowserRouter";

const MyRoute = ({ path, element }) => {
  const { state } = useContext(RouterContext);
  const pathname = window.location.pathname;
  if (path === pathname) {
    return element;
  }
  return null;
};

export default MyRoute;
