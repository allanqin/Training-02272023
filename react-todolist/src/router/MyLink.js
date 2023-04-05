import React, { useContext } from "react";
import { RouterContext } from "./MyBrowserRouter";

const MyLink = ({ children, to }) => {
  const { forceUpdate } = useContext(RouterContext);
  const clickHandler = (e) => {
    e.preventDefault();
    // window.location.href = to;
    window.history.pushState({}, "", to);
    forceUpdate();
  };
  return (
    <a href={to} onClick={clickHandler}>
      {children}
    </a>
  );
};

export default MyLink;
