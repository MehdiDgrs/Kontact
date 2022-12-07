export default function blogBody({
  title,
  author,
  date,
  postImg,
  imgCaption,
  description,
  postImgDescription,
}) {
  let placeHolderDate = Date();
  console.log(new Date(date).toLocaleDateString());
  return (
    <article className="mx-auto px-5 lg:max-w-[50%] lg:w-2/4  my-5   md:max-w-[75%]  break-words  py-10  ">
      <div className="py-3">
        <h1 className="text-gray-900 text-2xl mb-5 md:text-3xl lg:text-3xl  line font-bold uppercase mt-2  leading-5 ">
          {title}
        </h1>
        <div className="text-xs pb-2 ">
          <span className="after:content-['•'] mr-1">
            {author ? author : "John Doe "}
          </span>
          <span>
            {date ? new Date(date).toLocaleDateString() : placeHolderDate}
          </span>
        </div>
      </div>
      <div>
        <img className="pt-6 " src={postImg ? postImg : null} alt=""></img>
        <p className="opacity-70 px-3 pt-3 leading-6 text-base italic">
          {imgCaption}
        </p>
      </div>
      <div className="leading-relaxed font-normal text-[#333] text-base">
        {description}
      </div>
    </article>
  );
}
