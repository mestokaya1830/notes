export const metadata = {
  title:"Home",
  description:"Home Page Description"
}

export default async function Home() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return (
   <div>
      <h1>Home</h1>
   </div>
  );
}
