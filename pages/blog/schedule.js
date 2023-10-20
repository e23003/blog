import { client } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import Image from 'next/legacy/image'

//
const Schedule = ({ title, publish, content, eyecatch, categories }) => {
  return (
    <Container>
      <article>
        <PostHeader title={title} subtitle='Blog Article' publish={publish} />
        <figure>
          <Image
            src={eyecatch.url}
            alt=''
            layout='responsive'
            width={eyecatch.width}
            height={eyecatch.height}
            sizes='(min-width:1152px) 1152px,100vw'
            property
          />
        </figure>
      </article>
    </Container>
  )
}
const getStaticProps = async () => {
  const resPromise = client.get({
    endpoint: 'blogs',
    queries: { filters: 'slug[equals]schedule' }
  })
  const res = await resPromise
  const post = res.contents.at(0)
  //console.log(contents)
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories
    }
  }
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
