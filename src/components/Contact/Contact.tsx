import styles from './Contact.module.css'
import email from '/assets/gmail.svg'
import linkedin from '/assets/linkedin.svg'
import github from '/assets/github.svg'
import whatsapp from '/assets/whatsapp.svg'

function Contact() {
  return (
    <div className={styles.container}>
        <a href='mailto:claudiodenner2@gmail.com' target='_blank'><img src={email} /></a>
        <a href='https://www.linkedin.com/in/claudio-denner-12b467254/' target='_blank'><img src={linkedin} /></a>
        <a href='https://github.com/ClaudioDenner' target='_blank'><img src={github} /></a>
        <a href='https://wa.me//5571981720488' target='_blank'><img src={whatsapp} /></a>
    </div>
  )
}

export default Contact