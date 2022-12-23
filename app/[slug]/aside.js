import { usePosts } from "../hooks/usePosts";
import AsideElement from "./asideElements";
// import { useWindowSize } from "../hooks/useWindowSize";
let domain = process.env.DOMAIN;
let arr = [];
let getAsidePosts = async () => {
  const posts = await usePosts().then((result) => result.data);
  console.log(
    posts[0].attributes.postImg.data.attributes.formats.thumbnail.url
  );

  let counter = 0;
  for (let i = posts.length - 1; i >= 0; i--) {
    arr.push(
      <AsideElement
        key={posts[i].id}
        title={posts[i].attributes.title}
        postsImg={`${
          domain +
          posts[i].attributes.postImg.data?.attributes.formats.thumbnail.url
        }`}
      />
    );
  }

  return arr;
};
getAsidePosts();
export default async function Aside() {
  // const posts = await usePosts().then((result) => result.data);
  // console.log(posts.length);

  // let newData = posts.map((x) => {
  //   return <div key={x.id}>{x.attributes.title}</div>;
  // });

  return (
    <aside className=" xl:col-span-2 xl:max-w-[75%] hidden xl:block ml-5 xl:content-center  my-auto ">
      <h1 className="text-gray-900 text-xl mb-5 font-bold">Plus d'articles</h1>
      {arr}
    </aside>
  );
}
