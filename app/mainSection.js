import PostPreview from "./postPreview";
let DOMAIN = process.env.DOMAIN;
let URL = process.env.QUERY_ADRESS;
let query = `query FetchAllPosts {
  articles{
    data 
    {
      attributes
        {mainImage{data{attributes{url}}}
          title
          content 
          categories{data{attributes{name}}}
          
      createdAt }
    }
  } 
}`;
let fetchData = async () => {
  let res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) {
    console.error("error in request");
  } else return res.json();
};

export async function MainSection() {
  let data = await fetchData();

  let arrayOfArticles = data.data.articles.data;

  return (
    <section className=" border-t-4 grid mx-auto sm:container  ">
      {arrayOfArticles.map((article) => {
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
      })}
    </section>
  );
}
