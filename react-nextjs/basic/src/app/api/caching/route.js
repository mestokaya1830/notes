//default api route is caching build and test time
//to ignore default cacheing not check again with build
export const dynamic = "force-dynamic"
export async function GET() {
  return Response.json({time: new Date().toLocaleTimeString()})
}