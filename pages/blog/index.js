import Hero from 'components/hero'

const params = { title: 'Blog', subtitle: 'Recent Posts' }
const Blog = () => (
  <>
    <Hero {...params} />
  </>
)

export default Blog
