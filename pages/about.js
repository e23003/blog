import Hero from 'components/hero'

const params = {title :'About', subtitle:'About development activities'}
const About =() => {
  return (

    <Hero {...params}/>
  )
}

export default About