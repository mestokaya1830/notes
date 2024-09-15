import Image from "next/image";
import img0 from "@/public/0.png";
import img1 from "@/public/1.png";

export default function Photos() {
  return (
    <>
      <div>
        <Image
          src={img0}
          width={200}
          height={200}
          quality={70}
          placeholder="blur"
          alt="no image"
          className="images"
        />
        <Image
          src={img1}
          width={200}
          height={200}
          quality={70}
          alt="no image"
          className="images"
        />
        <Image
          src='https://fastly.picsum.photos/id/923/200/200.jpg?hmac=3VHvOqFmO1AmGdpW-XcIVVb5CSOm5AwgyYRt9jYWAvo'
          width={200}
          height={200}
          quality={70}
          alt="no image"
          className="images"
        />
      </div>
    </>
  );
}
