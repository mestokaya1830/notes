import { Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <main className="router">
        <Outlet />
      </main>
    </>
  )
}
