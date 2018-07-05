const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `_posts` })
    createNodeField({
      node,
      name: `slug`,
      value: `/blog${slug}`,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const postsQuery = graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)

    postsQuery.then(result => {
      const createPageFromNode = ({ node }) => {
        const { slug } = node.fields

        createPage({
          path: slug,
          component: path.resolve(`./src/templates/post.js`),
          context: { slug },
        })
      }

      result.data.allMarkdownRemark.edges.forEach(createPageFromNode)

      resolve()
    })
  })
}

exports.modifyWebpackConfig = ({ config }) => {
  return config.merge({
    resolve: {
      root: path.resolve(config._config.context, 'src'),
    },
  });
};
