import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY
})

// const getPostBySlug = slug => {
//   const post = client.get({
//     endpoint: 'blogs',
//     queries: { filters: `slug[equals]${slug}` }
//   })
//   return post.contents.at(0)
// }

// export { getPostBySlug }
