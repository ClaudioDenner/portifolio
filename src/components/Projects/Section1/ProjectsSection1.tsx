import styles from './ProjectsSection1.module.css'
//import { useState } from 'react'
import { Section1 } from '../../../bd/Section1'
import LazyLoad from 'react-lazy-load';


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
                        <h1 className={styles.title}>{e.title}</h1>
                        <h2 className={styles.type}>{e.type}</h2>
                        <h2 className={styles.type}>{e.plataform}</h2>
                        <ul className={styles.list_item}>
                            {e.tools.map((i, it)=><li key={it}>{i}</li>)}
                        </ul>
                    </div>
                </div>
            )
        }



    </div>
  )
}

export default ProjectsSection1