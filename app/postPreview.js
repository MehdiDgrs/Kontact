import Link from "next/link";

export default function postPreview({
  postPicture,
  title,
  category,
  description,
}) {
  return (
    <div class="flex justify-center my-4">
      <div class="rounded-lg shadow-lg bg-white md:max-w-md max-w-sm">
        <a href="#!" className="relative">
          <button
            type="button"
            class=" absolute top-2 left-2 px-6 py-2.5 z-50 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button
          </button>
          <img class="rounded-t-lg" src={postPicture} alt="" />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-3xl font-medium mb-2 uppercase">
            {title}
          </h5>
          <p class="text-gray-700 text-base mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
}
