import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

const params = { title: 'Blog', subtitle: 'Recent Posts' }
const Blog = () => (
  <Container>
    <Meta pageTitle='ブログ' />
    <Hero {...params} />
  </Container>
)

export default Blog
