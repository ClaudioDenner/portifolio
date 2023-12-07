import styles from './ProjectsSection2.module.css'
import { Section2 } from '../../../bd/Section2'
import LazyLoad from 'react-lazy-load';

const newArr = Section2.reverse()


function ProjectsSection2() {


  
  return (
    
    <div className={styles.container}>
        {
            newArr.map((e)=>
                <a key={e.id}  href={e.urlProject} target='_blank'  className={styles.item}>
                  <LazyLoad>
                    <img className="img_list2" src={"/section2/"+e.nomeGif} loading='lazy'  />
                  </LazyLoad>
                    <h1 className={styles.title}>{e.title}</h1>
                </a>

                
            )
        }
    </div>
  )
}

export default ProjectsSection2