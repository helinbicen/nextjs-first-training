import React from 'react';
import { request } from 'graphql-request';

const query = `
  query {
    content(id: "cldrebdvl4a1f0bml08zijqlk") {
      title
      author
      content
      featuredImage
    }
  }
`;

const SsrPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>{data?.title}</h1>
      <h2>{data?.author}</h2>
      <p>{data?.content}</p>
      <img src={data?.featuredImage} alt="Featured Image" />
    </div>
  );
};

export async function getServerSideProps() {
  const result = await request('https://api-eu-west-2.hygraph.com/v2/cldrc7hkp3fm201un1ah7301g/master', query);
  return {
    props: {
      data: result.data,
    },
  };
}

export default SsrPage;