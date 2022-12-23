let DOMAIN = process.env.DOMAIN;
import { usePosts } from "../hooks/usePosts";
import { notFound } from "next/navigation";
import BlogBody from "./blogBody";
import { useTitle } from "./useTitle";
import Aside from "./aside";

export async function generateStaticParams() {
  const posts = await usePosts().then((result) => result.data);

  return posts.map((post) => ({
    slug: post.attributes?.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = params;
  let data = await usePosts(slug);
  if (data.data.length === 0) {
    notFound();
  }
  let attributes = data?.data[0]?.attributes;
  let postImg = attributes.postImg?.data?.attributes;
  return (
    <div className="xl:grid  xl:grid-cols-6 mx-auto px-5  xl:max-w-[65%]">
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
