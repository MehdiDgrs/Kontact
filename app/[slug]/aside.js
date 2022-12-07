import { fetchAllPosts } from "../mainSection";

let getAsidePosts = async () => {
  const posts = await fetchAllPosts().then((result) => result.data);
  console.log(posts);
  let arr = [];
  let counter = 0;
  for (let i = posts.length - 1; i >= 0; i--) {
    arr.push(<div key={posts[i].id}>{posts[i].attributes.title}</div>);
  }

  return arr;
};
export default async function Aside() {
  const posts = await fetchAllPosts().then((result) => result.data);
  console.log(posts.length);

  let newData = posts.map((x) => {
    return <div key={x.id}>{x.attributes.title}</div>;
  });

  return (
    <div>
      {newData}{" "}
      <div style={{ backgroundColor: "red" }}>{await getAsidePosts()}</div>
    </div>
  );
}
