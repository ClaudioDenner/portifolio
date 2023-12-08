

import './App.css'
import { createContext, useState, useEffect } from 'react';
import Nav from './components/Nav/Nav'
import Cover from './components/Cover/Cover';
import ProjectsSection1 from './components/Projects/Section1/ProjectsSection1';
import ProjectsSection2 from './components/Projects/Section2/ProjectsSection2';
import About from './components/About/About.tsx';
import Contact from './components/Contact/Contact.tsx';
import ProjectsSection3 from './components/Projects/Section3/Section3.tsx';


const DEFAULT_VALUE_THEME = {
  theme:false,
  setTheme: ()=>{}

}

type TypeThemeColor = {
  theme:boolean,
  setTheme:React.Dispatch<React.SetStateAction<boolean>>
}

export const ThemeContext = createContext<TypeThemeColor>(DEFAULT_VALUE_THEME);


function themeDark(){
  document.documentElement.style.setProperty("--bg", "black")
  document.documentElement.style.setProperty("--h1", "rgb(240, 240, 240)")
  document.documentElement.style.setProperty("--ln-bold", "rgba(49, 47, 47, 0.164);")
  document.documentElement.style.setProperty("--p", "rgb(226, 226, 226)")
  document.documentElement.style.setProperty("--orangeWhite", "white")


  
}

function themeLight(){
  document.documentElement.style.setProperty("--bg", "white")
  document.documentElement.style.setProperty("--h1", "rgb(43, 42, 42)")
  document.documentElement.style.setProperty("--ln-bold", "rgb(240, 240, 240)")
  document.documentElement.style.setProperty("--p", "rgb(104, 104, 104)")
  document.documentElement.style.setProperty("--orangeWhite", "orange")



}

function App() {

  const [ theme, setTheme] = useState(true)

  useEffect(()=>{
    theme ? themeDark():themeLight()
  },[theme])
 
  


  return (
    <>
    <div className='App'>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Nav />
      <Cover />
      <h1 className='title_section' id='about'></h1>
      <About />
      <h1 className='title_section' id='contact'>Contact</h1>
      <Contact />
      <h1 className='title_section' id='projects' style={{marginTop:50}}>Projects</h1>
      <ProjectsSection1 />
      <h1 className='title_section' >FrontendMentor</h1>
      <ProjectsSection3 />
      <h1 className='title_section' >My Playground</h1>
      <ProjectsSection2 />

    </ThemeContext.Provider>
    </div>
    </>
  )
}

export default App
