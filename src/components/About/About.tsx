import styles from './About.module.css'
import cdenner from './assets/cdenner.svg'
import imgCover from './assets/imgCover.svg'
function About() {
  return (
    <div className={styles.container} id='about'>
      <div className={styles.section_one}>
        <div className={styles.container_img_person}>
          <img src={cdenner} className={styles.img_person}  />
        </div>
        <h1 className={styles.title}>
          Olá, sou Claudio Denner, Desenvolvedor FullStack
        </h1>
        <p className={styles.text}>
        Obrigado pelo interesse! Sou um desenvolvedor de software que estuda Ciência da Computação. Minha principal linguagem é o Javascript e com ela atuo tanto server-side quanto client-side web/mobile. Dentro do ecossistema Javascript minha stack mais forte é o React e todas as suas tecnologias complementares.
        </p>
      </div>

      <div className={styles.section_two}>
        <img src={imgCover} className={styles.img_cover} />
      </div>
        
    </div>
  )
}

export default About