
// //create cookies and headers by inline headers
// export async function GET(request) {
//   const headerList = new Headers(request.headers)
//   console.log(headerList)
//   const getCookie = request.cookies.get('auth')
  
//   return Response.json(getCookie, {
//     headers: {
//       "Content-Type":"application/json",
//       "Set-Cookie":"auth=mesto"
//     }
//   })
// }


//create cookies and headers by nextjs-function
import { headers, cookies } from "next/headers"

export async function GET() {
  const headerList = headers()
  cookies().set('auth2', 'mesto-kaya')
  const getCookie = cookies().get('auth2')
  
  return Response.json(getCookie)
}