import React, { useState, useEffect } from "react";
import { request } from "graphql-request";

const query = `
query  {
  stream(where: { id: "cldrebdvl4a1f0bml08zijqlk"}){
  title
  slug
  content {
    raw
  }
  featuredImage {
    url
  }
  author
}
`;

const CsrPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await request(
        "https://api-eu-west-2.hygraph.com/v2/cldrc7hkp3fm201un1ah7301g/master",
        query
      );
      setData(result.stream);
    };
    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>{data?.title}</h1>
      <h2>{data?.author}</h2>
      <p>{data?.content}</p>
      <img src={data?.featuredImage} alt="Featured Image" />
    </div>
  );
};

export default CsrPage;
