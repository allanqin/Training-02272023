import React, { createContext, useState } from "react";

export const RouterContext = createContext(null);

const MyBrowserRouter = ({ children }) => {
  const [state, setState] = useState(1);

  const forceUpdate = () => {
    console.log("force update");
    setState((prev) => prev + 1);
  };

  return (
    <RouterContext.Provider value={{ state, forceUpdate }}>
      {children}
    </RouterContext.Provider>
  );
};

export default MyBrowserRouter;
