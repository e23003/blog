import { client } from 'lib/api'
import { extractText } from 'lib/extract-text'
import Meta from 'components/meta'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import PostBody from 'components/post-body'
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar
} from 'components/two-column'
import ConvertBody from 'components/convert-body'
import PostCategories from 'components/post-categories'
import Image from 'next/legacy/image'
import Head from 'next/head'

const Schedule = ({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description
}) => {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
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
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  )
}

//<ConvertBody contentHTML={content} />
const getStaticProps = async () => {
  const resPromise = client.get({
    endpoint: 'blogs',
    queries: { filters: 'slug[equals]schedule' }
  })
  const res = await resPromise
  const post = res.contents.at(0)

  const description = extractText(post.content)
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
      description: description
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
