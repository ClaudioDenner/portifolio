import style from './Section3.module.css'
import LazyLoad from 'react-lazy-load';
import iconGitHub from 'bootstrap-icons/icons/github.svg'
import iconScreen from 'bootstrap-icons/icons/window-desktop.svg'
import { Section3 } from '../../../bd/Section3';

const newArr = Section3.reverse()

function ProjectsSection3() {
  return (
    <div className={style.container}>
        {
            newArr.map((e)=> 
            <div className={style.card} key={e.id}>
                <LazyLoad>
                <div className={style.card_container_img}>
                <img className={style.card_img} src={"/section3/"+e.nameImg}></img>
                </div>
                </LazyLoad>
                <div className={style.card_infos}>
                    <h1 className={style.card_infos_title}>{e.title}</h1>

                    <div className={style.card_infos_links}>
                        <h2 className={style.card_infos_links_title}>Links</h2>
                        <a href={e.urlProject} target='_blank'><img src={iconScreen} className={style.card_infos_links_icons} /></a>
                        <a href={e.urlRepo} target='_blank'><img src={iconGitHub} className={style.card_infos_links_icons} /></a>
                    </div>

                </div>
            </div>
            )
        }
    </div>
  )
}

export default ProjectsSection3