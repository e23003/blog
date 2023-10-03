import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

const params = { title: 'Blog', subtitle: 'Recent Posts' }
const Blog = () => (
  <Container>
    <Meta pageTitle='ブログ' pageDesc='ブログ記事の一覧' />
    <Hero {...params} />
  </Container>
)

export default Blog
