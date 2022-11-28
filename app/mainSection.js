import PostPreview from "./postPreview";
let DOMAIN = process.env.DOMAIN;
let URL = process.env.QUERY_ADRESS;
// let query = `query FetchAllPosts {
//   articles{
//     data
//     {
//       attributes
//         {mainImage{data{attributes{url}}}
//           title
//           content
//           categories{data{attributes{name}}}

//       createdAt }
//     }
//   }
// }`;
let fetchData = async () => {
  let res = await fetch("http://localhost:1337/api/articles?populate=%2A", {
    method: "GET",
    // headers: { "Content-Type": "application/json" },
    //body: JSON.stringify({ query }),
  });
  if (!res.ok) {
    console.error("error in request");
  } else return res.json();
};

export async function MainSection() {
  let res = await fetchData();

  let articles = res.data;
  //  let arrayOfArticles = data.data.articles.data;

  return (
    <section className=" border-t-4 w-screen  ">
      {/* {arrayOfArticles.map((article) => {
        return (
          <PostPreview
            key="1"
            title={article.attributes?.title}
            category={article.attributes.categories.data[0]?.attributes.name}
            postPicture={
              DOMAIN + article.attributes.mainImage.data?.attributes?.url
            }
            description={article.attributes.content}
          />
        );
      })} */}
      <div className="grid grid-cols-1 mx-auto place-content-center w-4/5">
        {articles.map((article) => {
          let { attributes } = article;
          let imgUrl = attributes.mainImage.data?.attributes.formats.small.url;
          console.log(DOMAIN + imgUrl);

          return (
            <PostPreview
              key={article.id}
              title={attributes.title}
              category={attributes.categories}
              description={attributes.content}
              postPicture={DOMAIN + imgUrl}
            />
          );
        })}
      </div>
    </section>
  );
}
