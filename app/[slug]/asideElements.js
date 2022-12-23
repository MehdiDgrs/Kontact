export default function AsideElements({ ...props }) {
  let { title, postsImg } = props;
  console.log(postsImg, props);
  return (
    <div className="flex flex-col ">
      <img className="max-w-[95%]" src={postsImg}></img>
      <h1 className="text-gray-800 text-xl mb-5 font-medium">{title}</h1>
    </div>
  );
}
