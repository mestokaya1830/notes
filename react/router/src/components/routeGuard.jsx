import { Outlet, Navigate } from "react-router-dom"

export default function RouteGuard() {
 const user = null
 return (
  <div className="router">
    {user ? <Outlet /> : <Navigate to="/" />}
  </div>
 )
}
