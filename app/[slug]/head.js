import { usePosts } from "../hooks/usePosts";
export default async function Head({ params }) {
  const post = await usePosts(params.slug);
  let { data } = post;
  let title = data[0]?.attributes?.title;
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </>
  );
}
