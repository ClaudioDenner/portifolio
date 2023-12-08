import styles from './About.module.css'
import cdenner from '/assets/cdenner.png'
import { Tools } from '../Tools/Tools'

function About() {
  return (
    <div className={styles.container}>
        
            <img src={cdenner} className={styles.cdenner}/>

            <div className={styles.container_2}>
              <h1 className={styles.title_section}>About</h1>
              <p className={styles.apresentation}>Olá, bem vindo(a) ao meu portifólio, obrigado pelo interesse! Sou um desenvolvedor de software que estuda Ciência da Computação. Minha principal linguagem é o Javascript e com ela atuo tanto no server-side quanto no client-side web/mobile. Dentro do ecossistema Javascript minha stack mais forte é o React e todas as suas tecnologias complementares.</p>
              <h1 className={styles.title_section}>Tolls & Stack</h1>
              <Tools />
            </div>
        
    </div>
  )
}

export default About