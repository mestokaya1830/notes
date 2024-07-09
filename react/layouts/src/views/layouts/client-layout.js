import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function MasterLayout() {
  return (
    <div>
      <Navbar />
      <main className="router">
        <Outlet />
      </main>
    </div>
  );
}
