const path = require(`path`)
const {
  createFilePath
} = require(`gatsby-source-filesystem`)

exports.createPages = async ({
  actions,
  graphql,
}) => {
  const {
    createPage
  } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const resultQuery = await graphql(
    `      
      {

        wpgraphql {
          pages {
            nodes {
              uri
              id
              isFrontPage
            }
          }
          posts {
            nodes {
              uri
              id
            }
          }
        }



        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }


      }
    `
  )
  if (resultQuery.errors) {
    throw resultQuery.errors
  }

  console.log(">>>>> resultQuery: ", resultQuery)
  const wpData = resultQuery.data.wpgraphql
  const posts = resultQuery.data.allMarkdownRemark.edges


  wpData.pages.nodes.forEach(page => {
    actions.createPage({
      path: page.isFrontPage ? "/" : page.uri,
      component: require.resolve("./src/templates/page-template.tsx"),
      context: {
        id: page.id
      },
    })
  })

  wpData.posts.nodes.forEach(post => {
    actions.createPage({
      path: `blog${post.uri}`,
      component: require.resolve("./src/templates/post-template.tsx"),
      context: {
        id: post.id
      },
    })
  })


  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      // matchPath: page.path.match(/^\/app/) ? "/app/*" : "",
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })



}


exports.onCreatePage = async ({
  page,
  actions
}) => {
  const {
    createPage
  } = actions

  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"
    createPage(page)
  }
}


exports.onCreateNode = ({
  node,
  actions,
  getNode
}) => {
  const {
    createNodeField
  } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({
      node,
      getNode,
    })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}