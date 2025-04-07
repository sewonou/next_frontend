import client from "../client";
import { gql } from "@apollo/client";
import { cleanAndTransformBlocks } from "../utils/cleanAndTransformBlocks";
import { BlockRenderer } from "../components/BlockRenderer";

export default function Page(props){
  console.log("PAGE PROPS : ", props);
  return <div>
    <BlockRenderer blocks={ props.blocks } />
  </div>;
};

export const getStaticProps = async (context) => {
  console.log("CONTEXT : ", context);
  const uri = `/${(context.params.slug.join("/"))}/`;
  console.log(uri);
  const {data} = await client.query({
    query:gql`
        query PageQuery($uri: String!) {
            nodeByUri(uri: $uri) {
                ... on Page {
                    id
                    title
                    blocks
                }
            }
        }
    `,
    variables: {
      uri,
    }
  });
  return {
    props: {
      title: data.nodeByUri.title,
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
    }
  }
};

export const getStaticPaths = async () => {
  const {data} = await client.query({
    query: gql`
    query AllPagesQuery {
      pages {
        nodes {
          uri
        }
      }
    }
    `
  });
  return {
    paths : data.pages.nodes.filter(page => page.uri !== "/").map(page => ({
      params : {
        slug: page.uri.substring(1, page.uri.length - 1).split("/")
      }
    })),
    fallback: "blocking",
  };

};