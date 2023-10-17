import { client } from 'lib/api'

const Schedule = () => {
  return <div></div>
}

const getStaticProps = () => {
  const resPromise = client.get({
    endpoint: 'blogs'
  })
  resPromise
    .then(res => res.contents)
    .then(contents => contents.at(0))
    .then(content => console.log(content))
  return {
    props: {}
  }
}

export { getStaticProps }
export default Schedule
