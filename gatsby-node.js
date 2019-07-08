/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { slugify } = require("./src/util/utilityFunction")
const path= require("path")
const authors = require("./src/util/authors")
const _=require("lodash")

exports.onCreateNode = ({ node, actions}) => {
    const { createNodeField } = actions
    if(node.internal.type === "MarkdownRemark") {
        const slugFromTitle= slugify(node.frontmatter.title)
        createNodeField({
            node,
            name:"slug",
            value: slugFromTitle
        })
    }
}

exports.createPages= ({actions,graphql})=> {
    const { createPage } = actions;
    const templates = {
        singlePost: path.resolve("src/templates/single-post.js"),
        tagsPage: path.resolve("src/templates/tags-page.js"),
        tagPosts: path.resolve("src/templates/tag-posts.js")
    }

    return graphql (
        `
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            author
                            tags
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
        `
    ).then(res=>{
        if(res.errors) return Promise.reject(res.errors)
        const posts= res.data.allMarkdownRemark.edges
        posts.forEach(({node})=>{
            console.log(authors.find(x=> x.name === node.frontmatter.author).imageUrl)
            createPage({
                path: node.fields.slug,
                component: templates.singlePost,
                context: {
                    //Passing slug for templates to get post
                    slug: node.fields.slug,
                    //Find image url from author and pass it to single post template
                    imageUrl: authors.find(x=> x.name === node.frontmatter.author).imageUrl
                }
            })
        })

        //Get All tags
        let tags=[]
        _.each(posts,edge=>{
            if(_.get(edge,"node.frontmatter.tags")){
                tags=tags.concat(edge.node.frontmatter.tags)
            }
        })

        let tagPostCounts = {}
        tags.forEach(tag=>{
            tagPostCounts[tag] = (tagPostCounts[tag]||0+1)
        })

        tags = _.uniq(tags)
        //Create tags page
        createPage({
            path: "/tags",
            component: templates.tagsPage,
            context: {
                tags,
                tagPostCounts
            }
        })

        //Create tag post pages
        tags.forEach(tag=>{
            createPage({
                path: `/tag/${slugify(tag)}`,
                component: templates.tagPosts,
                context: {
                    tag
                }
            })
        })
    })
}