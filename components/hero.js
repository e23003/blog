import style from 'styles/hero.module.css'

const Hero = ({ title, subtitle, imageOn = false }) => (
  <div>
    <div className={style.text}>
      <h1 className={style.title}>{title}</h1>
      <p className={style.subtitle}>{subtitle}</p>
    </div>
    {imageOn && <figure> [画像] </figure>}
  </div>
)

export default Hero
