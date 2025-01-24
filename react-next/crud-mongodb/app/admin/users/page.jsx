import React from "react";
import Link from "next/link";

const getUsers = async () => {
  const result = await fetch("http://localhost:3000/api/users");
  return result.json();
};
export default async function Users() {
  const { users } = await getUsers();
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users && users.map((item) => (
          <li key={item._id}>
            <span>{item.username}</span>
            <span>{item.password}</span>
            <span>
              <Link href={`/admin/users/${item._id}`}>Details</Link>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
