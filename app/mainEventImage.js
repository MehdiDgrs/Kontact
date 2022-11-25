import Image from "next/image";

let URL = process.env.QUERY_ADRESS;
let query = `query fetchData {
  categories(filters:{name:{contains:"Main"}})
    {data
    {attributes{name articles{data{attributes{mainImage{data{attributes{url}}}}}}}}}
  }`;
let mainURL = process.env.DOMAIN;

let getData = async () => {
  let res = await fetch(URL, {
    method: "POST",
    body: JSON.stringify({ query: query }),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function MainEventImage() {
  let res = await getData();
  let mainArr = res.data.categories.data;
  let LastMainEvent = mainArr[0].attributes.articles.data.pop();
  let url = LastMainEvent.attributes.mainImage.data.attributes.url;

  return <img src={`${mainURL}${url}`}></img>;
}
