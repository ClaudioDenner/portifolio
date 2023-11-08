import styles from './About.module.css'
import cdenner from '/assets/cdenner.png'

function About() {
  return (
    <div className={styles.container}>
        
            <img src={cdenner} className={styles.cdenner}/>
        
        
            <p className={styles.apresentation}>Olá eu sou o Claudio Denner, trabalho com tecnologia a pouco mais de 3 anos, sou graduado em Ciências Biológicas mas gosto mesmo é da tecnologia. Curto jogar games nas horas vagas ou fazer ilustrações digitais por hobby.</p>
        
    </div>
  )
}

export default About