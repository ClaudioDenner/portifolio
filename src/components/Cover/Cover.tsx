import styles from './Cover.module.css'
//import imgCover from '/assets/cover.png'
//import imgCover2 from '/assets/cover2.png'
import imgCover3 from '/assets/cover3.png'



function Cover() {


  return (
    <div className={styles.container}>
        <div className={styles.imgCover}>
            <img src={imgCover3} />
        </div>

        <div className={styles.textCover}>
                <h1>Bem vindo(a) ao meu portifólio! Sou um programador <span className={styles.spanName}>Frontend!</span></h1>
                <p>Apaixonado por transformar ideias em realidade digital. Estou pronto para enfrentar qualquer desafio que envolva a criação de soluções digitais inovadoras.</p>

                <h2>O que eu faço?</h2>

                <ul>
                    <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                        <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                    </svg>
                    Aplicações Web
                    </li>
                    <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                        <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                    </svg>
                    Aplicativos Mobile
                    </li>
                    
                </ul>
        </div>
    </div>
  )
}

export default Cover