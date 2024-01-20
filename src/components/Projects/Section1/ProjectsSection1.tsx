import styles from './ProjectsSection1.module.css'
import { Section1 } from '../../../bd/Section1'
import LazyLoad from 'react-lazy-load';
import { GiNotebook } from "react-icons/gi";

const newArr = Section1.reverse()


function ProjectsSection1() {





  return (
    <div className={styles.container}>
        
        {
            newArr.map((e)=>

                <div className={styles.item} key={e.id}>
                    
                    <div className={styles.imgProject} >
                        <a href={e.urlProject} target='_blank'>
                            <LazyLoad>    
                            <img src={"section1/"+e.nameImg}/>
                            </LazyLoad>
                            </a>
                    </div>
                    <div className={styles.description_item}>
                        <div className={styles.container_titles}>
                            <GiNotebook  className={styles.icon}/>
                            <div className={styles.titles_div}>
                                <h1 className={styles.title}>{e.title}</h1>
                                <h2 className={styles.type}>{e.type}</h2>
                                <h2 className={styles.type}>{e.plataform}</h2>
                                <h2 className={styles.type}>{e.date}</h2>
                            </div>
                        </div>

                        <p className={styles.description_text}>
                            {e.description}
                        </p>
                        <ul className={styles.list_item}>
                            {e.tools.map((i, it)=><li key={it}><img src={"icons/"+i} alt={i} /></li>)}
                        </ul>
                    </div>
                </div>
            )
        }



    </div>
  )
}

export default ProjectsSection1