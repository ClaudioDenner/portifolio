

import './App.css'
import { createContext, useState, useEffect } from 'react';
import Nav from './components/Nav/Nav'
import Cover from './components/Cover/Cover';
import { Tools } from './components/Tools/Tools.tsx';
import ProjectsSection1 from './components/Projects/Section1/ProjectsSection1';
import ProjectsSection2 from './components/Projects/Section2/ProjectsSection2';


//import { BrowserRouter, Routes, Route } from 'react-router-dom'

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


  
}

function themeLight(){
  document.documentElement.style.setProperty("--bg", "white")
  document.documentElement.style.setProperty("--h1", "rgb(43, 42, 42)")
  document.documentElement.style.setProperty("--ln-bold", "rgb(240, 240, 240)")
  document.documentElement.style.setProperty("--p", "rgb(104, 104, 104)")


}

function App() {

  const [ theme, setTheme] = useState(false)

  useEffect(()=>{
    theme ? themeDark():themeLight()
  },[theme])
 
  


  return (
    <>
    <div className='App'>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Nav />
      <Cover />
      <h1 className='title_section' id='projetos'>Ferramentas & Stack</h1>
      <Tools />
      <h1 className='title_section' id='projetos'>Projetos</h1>
      <ProjectsSection1 />
      <h1 className='title_section' >Meu Playgound</h1>
      <ProjectsSection2 />
    </ThemeContext.Provider>
    </div>
    </>
  )
}

export default App
