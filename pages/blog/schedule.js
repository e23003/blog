import { client } from 'lib/api'
//import { getPostBySlug } from 'lib/api'
import Container from 'components/container'

//{ title, publish, content, eyecatch, categories }
const Schedule = ({ title }) => {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  )
}
const getStaticProps = async () => {
  const resPromise = client.get({
    endpoint: 'blogs',
    queries: { filters: 'slug[equals]schedule' }
  })
  const res = await resPromise
  const contents = res.contents.at(0)
  //console.log(contents)
  return {
    props: { title: contents.title }
  }
  // return {
  //   props: {
  //     title: post.title,
  //     publish: post.publishDate,
  //     content: post.content,
  //     eyecatch: post.eyecatch,
  //     categories: post.categories
  //   }
}

// const getStaticProps = () => {

//   const resPromise = client.get({
//     endpoint: 'blogs'
//   })
//   resPromise
//     .then(res => res.contents)
//     .then(contents => contents.at(0))
//     .then(content => console.log(content))
//   return {
//     props: {}
//   }
// }
export { getStaticProps }

export default Schedule
