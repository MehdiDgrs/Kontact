let DOMAIN = process.env.DOMAIN;
let URL = process.env.QUERY_ADRESS;
import { fetchAllPosts } from "../mainSection";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await fetchAllPosts().then((result) => result.data);

  return posts.map((post) => ({
    slug: post.attributes?.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = params;
  let data = await fetchAllPosts(slug);
  if (data.data.length === 0) {
    notFound();
  }
  let attributes = data?.data[0]?.attributes;
  attributes;
  return (
    <>
      <p>{attributes.content}</p>
    </>
  );
}
