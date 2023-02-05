import React from "react";
import { gql } from "@apollo/client";

import client from "../../apolloClient";

export default function SsgPage({ streams }) {
  console.log(streams);
  return (
    <div>
      sajdjasnd
      <h1>{streams?.title}</h1>
    <h2>{streams?.author}</h2>
    <p>{streams?.content}</p>
    <img src={streams?.featuredImage} alt="Featured Image" />
    </div>
  );
}

export async function getStaticProps() {
  const { data: streams } = await client.query({
    query: gql`
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
  }
    `,
  });
  console.log(streams);

  return {
    props: {
      streams,
    },
  };
}
