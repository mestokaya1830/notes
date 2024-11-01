import Link from "next/link";

export const metadata = {
  title: "Details",
  description: "Details Page Description",
};

export async function generateStaticParams() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users/");
  const final = await result.json()
  return final.map(item => ({id:`${item.id}`}))
}

const getUser = async (id) => {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  if (result.status == 200) {
    return result.json();
  }
};


export default async function Fetch({ params }) {
  const user = await getUser(params.id);
  return (
    <div>
      <h1>User Details</h1>
      <ul>
          <li>{user.id}</li>
          <li>{user.name}</li>
          <li>{user.email}</li>
      </ul>
      <Link href="/fetch-api"><button>Back</button></Link>
    </div>
  );
}
