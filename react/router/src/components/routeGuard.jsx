// import { Outlet, Navigate } from "react-router-dom"

// export default function RouteGuard() {
//  const user = null
//  return (
//   <div className="router">
//     {user ? <Outlet /> : <Navigate to="/" />}
//   </div>
//  )
// }

//or
// import { Navigate } from "react-router-dom"
// export default function RouteGuard({ children }) {
//  const user = null
//  if(user){
//   return (
//     <div className="router">{children}</div>
//   )
//  }
//  return <Navigate to="/" />
// }
