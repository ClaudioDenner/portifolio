import styles from './ProjectsSection2.module.css'
import { Section2 } from '../../../bd/Section2'

const newArr = Section2.reverse()


function ProjectsSection2() {

  
  return (
    
    <div className={styles.container}>
        {
            newArr.map((e)=>
                <a  href={e.urlProject} target='_blank' key={e.id} className={styles.item}>
                    <img src={"/section2/"+e.nomeGif} />
                    <h1 className={styles.title}>{e.title}</h1>
                </a>

                
            )
        }
    </div>
  )
}

export default ProjectsSection2