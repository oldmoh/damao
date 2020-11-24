/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
crypto = require('crypto')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      categories: allStrapiCategory(
        sort: { order: DESC, fields: posts___created_at }
      ) {
        nodes {
          name
          slug
          posts {
            preface
            slug
            title
            created_at(locale: "")
          }
        }
        totalCount
      }

      tags: allStrapiTag(sort: { order: DESC, fields: posts___created_at }) {
        nodes {
          name
          slug
          posts {
            preface
            slug
            title
            created_at(locale: "")
          }
        }
        totalCount
      }

      posts: allStrapiPost {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const categories = result.data.categories.nodes

  categories.forEach((category, index) => {
    createPage({
      path: `/category/${category.slug}`,
      component: require.resolve('./src/templates/posts.jsx'),
      context: category,
    })
  })

  const posts = result.data.posts.nodes

  posts.forEach((post, index) => {
    createPage({
      path: `/post/${post.slug}`,
      component: require.resolve('./src/templates/post.jsx'),
      context: post,
    })
  })

  const tags = result.data.tags.nodes

  tags.forEach((tag, index) => {
    createPage({
      path: `/tag/${tag.slug}`,
      component: require.resolve('./src/templates/posts.jsx'),
      context: tag,
    })
  })
}

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
exports.onCreateNode = async ({
  node,
  actions,
  store,
  getCache,
  createNodeId,
}) => {
  const { createNode } = actions

  if (
    node.internal.type === 'StrapiIndex' ||
    node.internal.type === 'StrapiPost'
  ) {
    let images = node.images

    if (images.length > 0) {
      const imageNodes = await Promise.all(
        images.map((image) =>
          createRemoteFileNode({
            url: `${image.url}`,
            parentNodeId: node.id,
            store,
            getCache,
            createNode,
            createNodeId,
            ext: image.ext,
          })
        )
      )

      images.forEach((image, i) => {
        image.localFile___NODE = imageNodes[i].id
      })
    }
  }

  if (node.internal.type === 'StrapiProfile') {
    let profile = node.profile
    if (profile) {
      const profileNode = await createRemoteFileNode({
        url: `${profile.url}`,
        parentNodeId: node.id,
        store,
        getCache,
        createNode,
        createNodeId,
        ext: profile.ext,
      })
      profile.localFile___NODE = profileNode.id
    }
  }
}
