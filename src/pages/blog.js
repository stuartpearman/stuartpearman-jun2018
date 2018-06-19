import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);

  const posts = nodes.map(post => (
    <article key={post.fields.slug} className="blog-post">
      <h2>
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
      </h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  ))

  return <section className="blog-feed">{posts}</section>
};

export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter { title }
          fields { slug }
        }
      }
    }
  }
`;
