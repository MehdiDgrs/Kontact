import { fetchAllPosts } from "./mainSection";

export default async function Head({ params }) {
  let data = await fetchAllPosts(params.slug);
  return (
    <>
      <title>LA SUEUR LOL</title>
    </>
  );
}
