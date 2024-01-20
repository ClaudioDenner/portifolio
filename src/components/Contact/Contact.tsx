import styles from './Contact.module.css'
import email from './assets/gmail.svg'
import linkedin from './assets/linkedin.svg'
import github from './assets/github.svg'

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.item_h1}>Fale comigo através das minhas redes sociais.</h1>
      <div className={styles.container_links}>
        <a href='mailto:claudiodenner2@gmail.com' target='_blank'><img src={email} className={styles.item} /></a>
        <a href='https://www.linkedin.com/in/claudio-denner-12b467254/' target='_blank'><img src={linkedin} className={styles.item} /></a>
        <a href='https://github.com/ClaudioDenner' target='_blank'><img src={github} className={styles.item} /></a>
      </div>

    </div>
  )
}

export default Contact