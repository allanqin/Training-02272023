import React from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";

import { Route, Routes } from "react-router-dom";
import Test from "./components/Test/Test";
import Test2 from "./components/Test/Test2";
import TestNav from "./components/Test/TestNav";
import TestHome from "./components/Test/TestHome";
import MyRoute from "./router/MyRoute";
import MyRoutes from "./router/MyRoutes";

const App = () => {
  // state = {
  //   activePage: "Dashboard",
  // };

  // handleChangeActivePage = (newActivePage) => {
  //   console.log(newActivePage);
  //   this.setState({
  //     activePage: newActivePage,
  //   });
  // };

  // render() {
  // let content = null;
  // switch (this.state.activePage) {
  //   case "Dashboard":
  //     content = <Dashboard />;
  //     break;
  //   case "TodoList":
  //     content = <TodoList />;
  //     break;
  //   default:
  //     break;
  // }

  return (
    <Layout>
      {/* <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/test" element={<TestNav />}>
          <Route index element={<TestHome />} />
          <Route path=":id" element={<Test />} />
          <Route path="test2" element={<Test2 />} />
        </Route>
      </Routes> */}
      {/* <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes> */}
      <MyRoutes>
        <MyRoute path="/" element={<Dashboard />} />
        <MyRoute path="/todo" element={<TodoList />} />
      </MyRoutes>
    </Layout>
  );
  // }
};

export default App;
