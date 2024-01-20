import styles from './App.module.css'
import About from './components/About/About'
import Nav from './components/Nav/Nav'
import { useState } from 'react'
import ProjectsSection1 from './components/Projects/Section1/ProjectsSection1'
import ProjectsSection2 from './components/Projects/Section2/ProjectsSection2'
import ProjectsSection3 from './components/Projects/Section3/Section3'
import Contact from './components/Contact/Contact'


function App() {

  const [sectionOne, setSectionOne] = useState(true)
  const [sectionTwo, setSectionTwo] = useState(false)
  const [sectionThree, setSectionThree] = useState(false)

  function handleProjects(value:number){
    setSectionOne(false)
    setSectionTwo(false)
    setSectionThree(false)

    switch(value){
      case 1:
        setSectionOne(true)
        break
      case 2:
        setSectionTwo(true)
        break
      case 3:
        setSectionThree(true)
        break

    }
  }

  return (
    <>
    <main>
    <Nav />
    <About />
    <h1 className={styles.title_section} id='projects'>Projetos</h1>
    <ul className={styles.navigator_project}>
      <li className={sectionOne ? styles.navigator_project_on : styles.navigator_project_off} onClick={()=>handleProjects(1)}>Meus trabalhos & Projetos</li>
      <li className={sectionTwo ? styles.navigator_project_on : styles.navigator_project_off} onClick={()=>handleProjects(2)} >Desafios</li>
      <li className={sectionThree ? styles.navigator_project_on : styles.navigator_project_off} onClick={()=>handleProjects(3)}>Meu Playground</li>
    </ul>
      {sectionOne && <ProjectsSection1 />}
      {sectionTwo && <ProjectsSection3 />}
      {sectionThree && <ProjectsSection2 />}
    <h1 className={styles.title_section} id='contact'>Contato</h1>
    <Contact />
    </main>
    </>
  )
}

export default App
