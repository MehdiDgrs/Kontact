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
let getPosts = async () => {
  let res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) {
    console.error("error in request");
  } else return res.json();
};

export default async function Page({ params }) {
  const { slug } = params;
  console.log(params);
  return <p>{slug}</p>;
}
