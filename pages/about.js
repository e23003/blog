import Container from 'components/container'
import Hero from 'components/hero'

const params = { title: 'About', subtitle: 'About development activities' }
const About = () => {
  return (
    <Container>
      <Hero {...params} />
    </Container>
  )
}

export default About
