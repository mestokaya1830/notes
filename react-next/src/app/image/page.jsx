import Image from "next/image";
import myImg from "/public/1.webp"

export const metadata = {
  title:"Images",
  description:"Images Page Description"
}

export default function Images() {
  return (
    <div>
      <h1>Images</h1>
      <h2>Local Image</h2>
      <div className="img-con">
        <Image src={myImg} width={400} height={260} alt="No Image" />
      </div>
      <h2>Remote Image</h2>
      <div className="img-con">
        <Image src="https://fastly.picsum.photos/id/862/200/200.jpg?hmac=rRVo_arAcvYpDsyKWlGq_MPlxjOpW2jIe42jZ8REjZ4" width={400} height={260} alt="No Image" />
      </div>
    </div>
  )
}

