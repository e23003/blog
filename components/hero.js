import style from 'styles/hero.module.css'
import Image from 'next/legacy/image'
import cube from 'images/cube.jpg'

const Hero = ({ title, subtitle, imageOn = false }) => (
  <div className={style.flexContainer}>
    <div className={style.text}>
      <h1 className={style.title}>{title}</h1>
      <p className={style.subtitle}>{subtitle}</p>
    </div>
    {imageOn && (
      <figure className={style.image}>
        <Image
          src={cube}
          alt=''
          layout='responsive'
          sizes='(min-width:1152px) 567px,(min-width:768px) 50vw,100vw'
          priority
          placeholder='blur'
        />
      </figure>
    )}
  </div>
)

export default Hero
