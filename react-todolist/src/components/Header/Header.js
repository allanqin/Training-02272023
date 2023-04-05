import React from "react";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import MyLink from "../../router/MyLink";

const Header = () => {
  // render() {
  // const { handleChangeActivePage } = this.props;
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   const number = Math.floor(Math.random() * 10);
  //   setTimeout(() => {
  //     navigate(`/test/${number}`);
  //   }, 1000);
  // };

  return (
    <ul className="nav">
      <h1>Header</h1>
      {/* <li onClick={() => handleChangeActivePage("Dashboard")}>DashBoard</li>
        <li onClick={() => handleChangeActivePage("TodoList")}>TodoList</li> */}
      <li>
        <MyLink to="/">DashBoard</MyLink>
      </li>
      <li>
        <MyLink to="/todo">TodoList</MyLink>
      </li>
      {/* <li>
        <NavLink
          end
          to="/test"
          style={({ isActive }) => {
            return isActive ? { color: "red" } : {};
          }}
        >
          {({ isActive }) => {
            return isActive ? "Test Active" : "Test";
          }}
        </NavLink>
      </li>
      <li>
        <a onClick={handleClick}>Random ID</a>
      </li> */}
    </ul>
  );
};
// }

export default Header;
