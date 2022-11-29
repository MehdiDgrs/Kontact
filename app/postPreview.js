import Link from "next/link";
import Image from "next/image";
export default function postPreview({
  postPicture,
  title,
  category,
  description,
}) {
  return (
    <div className="  grid grid-cols-3 lg:w-3/4 w-full   py-5 border-b border-grey   bg-white  ">
      <img src={postPicture} />

      <div className="px-6 col-span-2 ">
        <span className="px-2 py-1 bg-black text-white text-sm  uppercase box-border font-bold mb-2">
          Main Event
        </span>
        <h2 className="text-gray-900 text-xl md:text-2xl lg:text-3xl leading-5  font-medium mb-2 uppercase mt-2">
          {title}
        </h2>
      </div>
    </div>
  );
}
