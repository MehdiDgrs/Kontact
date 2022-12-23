export let usePosts = async (slug) => {
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
