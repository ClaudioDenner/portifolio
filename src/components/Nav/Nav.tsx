import styles from './Nav.module.css'
import ToggleMenu from './Toggle'
import Logo from './assets/logo.svg'
import { useState } from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Nav() {

  const [isActive, setActive] = useState(true)
  const [isActiveMobile, setActiveMobile] = useState(false)
  const [item1, setItem1] = useState(true)
  const [item2, setItem2] = useState(false)
  const [item3, setItem3] = useState(false)

  function toggleMenu(item:number){
    setItem1(false)
    setItem2(false)
    setItem3(false)

    switch(item){
      case 1:
        setItem1(true)
        break
      case 2:
        setItem2(true)
        break
      case 3:
        setItem3(true)
        break
    
    }
  }
  


  return (
    <div className={styles.container}>
      <div className={styles.container_desktop}>
        <div className={styles.flex}>
          <img src={Logo} className={styles.logo} />
          
          <ul className={styles.menu}>
            <a href='#' className={item1 ? styles.menuSelected: styles.menuNotSelected} onClick={()=>toggleMenu(1)}><li>Sobre</li></a>
            <a href='#' className={item2 ? styles.menuSelected: styles.menuNotSelected } onClick={()=>toggleMenu(2)}><li>Contato</li></a>
            <a href='#' className={item3 ? styles.menuSelected: styles.menuNotSelected} onClick={()=>toggleMenu(3)}><li>Projetos</li></a>
          </ul>
        </div>

        <div onClick={()=>setActive(!isActive)}>
        <ToggleMenu active={isActive} />
        </div>

      </div>

      <div className={isActiveMobile ? styles.container_mobile_on : styles.container_mobile_off}>
          <ul className={styles.menu_mobile}>
            <a href='#about' className={item1 ? styles.menuSelected: styles.menuNotSelected} onClick={()=>toggleMenu(1)}><li>Sobre</li></a>
            <a href='#contact' className={item2 ? styles.menuSelected: styles.menuNotSelected } onClick={()=>toggleMenu(2)}><li>Contato</li></a>
            <a href='#projects' className={item3 ? styles.menuSelected: styles.menuNotSelected} onClick={()=>toggleMenu(3)}><li>Projetos</li></a>
          </ul>
      </div>

      <div className={styles.button_hamburger_mobile} onClick={()=>setActiveMobile(!isActiveMobile)}>
        {
          isActiveMobile ? <IoClose /> : <IoMenuOutline />
        }
      </div>

    </div>
  )
    
}

export default Nav