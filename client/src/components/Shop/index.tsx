import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const ShopLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ShopLayout;
