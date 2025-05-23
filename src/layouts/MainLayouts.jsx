import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const MainLayouts = () => {
  return (
    <div>
      <Header></Header>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayouts;
