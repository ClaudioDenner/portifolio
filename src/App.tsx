import './App.css'
import { createContext, useState, useEffect } from 'react';
import Nav from './components/Nav/Nav'
import Cover from './components/Cover/Cover';
import AboutMe from './components/AboutMe/AboutMe';


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
      <AboutMe />
    </ThemeContext.Provider>
    </div>
    </>
  )
}

export default App
