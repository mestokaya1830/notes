
import { resolve } from "styled-jsx/css";


export default async function  Home () {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return (
    <>
      <main >
        <h1>Home</h1>
      </main>
    </>
  );
}
