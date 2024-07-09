import React from "react";
import { Outlet } from "react-router-dom";

export default function MasterLayout() {
  return (
    <div>
      <main className="router">
        <Outlet />
      </main>
    </div>
  );
}