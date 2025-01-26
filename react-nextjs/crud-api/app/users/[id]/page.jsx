
import Edituser from '@/components/edituser.jsx'
const getUser = async (id) => {
  try {
    const result = await fetch("http://localhost:3000/api/users/" + id);
    if (!result) {
      throw new Error("No Data");
    }
    return result.json();
  } catch (error) {
    console.log(error);
  }
};


export default async function Details({params}) {
  const {id} = await params
  const data = await getUser(id)
  console.log(data)
  return (
    <>
      <Edituser id={data[0]._id} username={data[0].username} password={data[0].password}/>
    </>
  );
}
