import PostPreview from "./postPreview";
let DOMAIN = process.env.DOMAIN;
let URL = process.env.QUERY_ADRESS;

export let fetchAllPosts = async (slug) => {
  let res = await fetch(
    `http://localhost:1337/api/articles${
      slug ? `?filters\[Slug\][$eq]=${slug}&populate=%2A` : `?populate=%2A`
    }`,
    {
      method: "GET",
    }
  );
  if (!res.ok) {
    console.error("error in request");
  } else return res.json();
};

export async function MainSection() {
  let res = await fetchAllPosts();

  let articles = res.data;
  //  let arrayOfArticles = data.data.articles.data;

  return (
    <section className="my-5">
      <h1 className="my-5 text-black font-bold text-3xl uppercase leading-5  ">
        Articles
      </h1>
      <div className="">
        {articles.map((article) => {
          let { attributes } = article;
          let imgUrl = attributes.mainImage.data?.attributes.formats.small.url;

          return (
            <PostPreview
              id={article.id}
              key={article.id}
              title={attributes.title}
              category={attributes.categories}
              description={attributes.content}
              postPicture={DOMAIN + imgUrl}
              slug={attributes.slug}
            />
          );
        })}
      </div>
    </section>
  );
}
