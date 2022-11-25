import Link from "next/link";

export default function postPreview({
  postPicture,
  title,
  category,
  description,
}) {
  return (
    <div>
      <Link href={`/${title}`}> lol </Link>
      <img src={postPicture}></img>
      <h1>{title}</h1>
      <div>{description}</div>
    </div>
  );
}
