import React from "react";
import { Outlet } from "react-router-dom";

export default function AdminPage() {
  return (
    <div>
      <h1>Дай админку</h1>
      <Outlet />
    </div>
  );
}
