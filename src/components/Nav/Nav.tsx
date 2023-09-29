import styles from './Nav.module.css'
import IconMoon from 'bootstrap-icons/icons/moon-fill.svg'
import IconSun from 'bootstrap-icons/icons/sun-fill.svg'
import { useState, useContext} from 'react'
import {ThemeContext} from '../../App'


function Nav() {


  const [darkMode, setDarkMode] = useState(false)
  const [openMenuMobile, setOpenMenuMobile] = useState(false)

  const theme = useContext(ThemeContext);

  
  function themeMode(){
    setDarkMode(!darkMode)
    theme.setTheme(!theme.theme)
  }



  return (
    <div className={styles.container}>
        <nav className={styles.nav}>
            
            
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={styles.buttonMenuMobile} viewBox="0 0 16 16" onClick={()=>setOpenMenuMobile(true)}>
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>

            <div className={styles.listMobile} id='menu_mobile' style={openMenuMobile? {width:'70%', visibility:'visible'}:{width:'0px', visibility:'hidden'}}>
              <div className={styles.buttonCloseMenuMobile}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor"  viewBox="0 0 16 16" onClick={()=>setOpenMenuMobile(false)} style={openMenuMobile? {visibility:'visible'}:{visibility:'hidden'}}>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg> 
              </div>
              <ul style={openMenuMobile? {display:'block'}:{display:'none'}}>
                  <li><a href='#'>Home</a></li>
                  <li><a href='#'>About me</a></li>
                  <li><a href='#'>Projects</a></li>
                  <li><a href='#'>Contact</a></li>
              </ul>
                
            </div>

            <ul className={styles.listDesktop}>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About me</a></li>
                <li><a href='#'>Projects</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
            
            <div className={styles.container_name}>
                <span className={styles.name_mobile}>CDENNER</span>
                <span className={styles.name}>CLAUDIO DENNER</span>
                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={styles.icon}  viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C2.25 2 1.49 2.759 1.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6ZM14.886 7.9v.164c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456v-1.3c-1.114 0-1.49-.362-1.49-1.456V4.352C14.51 2.759 13.75 2 12.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6ZM7.5 11.5V9.207l-1.621 1.621-.707-.707L6.792 8.5H4.5v-1h2.293L5.172 5.879l.707-.707L7.5 6.792V4.5h1v2.293l1.621-1.621.707.707L9.208 7.5H11.5v1H9.207l1.621 1.621-.707.707L8.5 9.208V11.5h-1Z"/>
                </svg>
            </div>

            <div className={styles.darkLightMode_container}>
                <img src={darkMode ? IconSun : IconMoon}  onClick={themeMode}/>
            </div>
        </nav>

    </div>
  )
}

export default Nav