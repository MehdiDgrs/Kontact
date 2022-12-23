import PostPreview from "./postPreview";
import { usePosts } from "./hooks/usePosts";
let DOMAIN = process.env.DOMAIN;
let URL = process.env.QUERY_ADRESS;

export async function MainSection() {
  let res = await usePosts();

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
