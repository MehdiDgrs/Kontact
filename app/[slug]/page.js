let DOMAIN = process.env.DOMAIN;
import { fetchAllPosts } from "../mainSection";
import { notFound } from "next/navigation";
import BlogBody from "./blogBody";
import { useTitle } from "./useTitle";
import Aside from "./aside";
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
  let postImg = attributes.postImg?.data?.attributes;

  return (
    <div>
      <BlogBody
        title={attributes.title}
        author={attributes.author}
        date={attributes.createdAt}
        description={attributes.content}
        postImg={`${postImg ? DOMAIN + postImg.formats.medium.url : null}`}
        imgCaption={
          typeof attributes.postImgDescription === "string" &&
          attributes?.postImgDescription
        }
      />
      <Aside />
    </div>
  );
}
