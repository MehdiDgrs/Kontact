import { fetchAllPosts } from "../mainSection";
import { notFound } from "next/navigation";

export default async function Head({ params }) {
  let data = await fetchAllPosts(params.slug);
  let [infos] = data.data;

  return (
    <>
      <title>{infos.attributes.title}</title>
    </>
  );
}
