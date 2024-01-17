import styles from './Nav.module.css'
import ToggleMenu from './Toggle'
import Logo from './assets/logo.svg'
import { useState } from 'react'

function Nav() {

  const [isActive, setActive] = useState(true)

  const [item1, setItem1] = useState(true)
  const [item2, setItem2] = useState(false)
  const [item3, setItem3] = useState(false)

  function toggleMenu(item){
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
      <div className={styles.flex}>
        <img src={Logo} className={styles.logo} />
        
        <ul className={styles.menu}>
        <a href='#' className={item1 ? styles.menuSelected: ''} onClick={()=>toggleMenu(1)}><li>Sobre</li></a>
        <a href='#' className={item2 ? styles.menuSelected: '' } onClick={()=>toggleMenu(2)}><li>Contato</li></a>
        <a href='#' className={item3 ? styles.menuSelected: ''} onClick={()=>toggleMenu(3)}><li>Projetos</li></a>
        </ul>
      </div>

      <div onClick={()=>setActive(!isActive)}>
      <ToggleMenu active={isActive} />
      </div>


    </div>
  )
}

export default Nav